import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text, Animated, StyleSheet } from 'react-native'
import { SuccessBtn, WrongBtn, SubmitBtn } from './Buttons'
import { NavigationActions } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../utils/notifications'
import { white, red, gray } from '../utils/colors'

/*
  Quiz component goes through all cards of the deck using counter in state.
  Notification (learning reminder )is set when user finishes quiz (click RIGHT/INCORRECT button for last question).
 */

class Quiz extends Component {

  static navigationOptions = () => ({
    title: `Quiz`
  })

  state = {
    currentCard: 0,
    score: 0
  }

  //
  componentWillMount () {
    /*
        Card flip animation was done based on this solution:
          https://codedaily.io/screencasts/12/Create-a-Flip-Card-Animation-with-React-Native
        RotateY property is changed based on interpolation of Animated Value.

        Unfortunately property backfaceVisibility: 'hidden' does not work on Android platform -
        https://github.com/facebook/react-native/issues/1973, so in addition to rotating card, the opacity was changed
        to mock hiding back-side of the card. In addition, z-index had to be adjusted, so that the Answer/Question
        button is not hidden by the View in the front (problem when question is of different length than answer
        and Answer/Question buttons are at different height).
    */

    this.rotation = 0
    this.animatedValue = new Animated.Value(0)
    this.animatedValue.addListener(({ value }) => {
      this.rotation = value
    })
    this.frontFlip = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })
    this.backFlip = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })

    //https://github.com/facebook/react-native/issues/1973
    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    })
    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    })
  }

  componentWillUnmount () {
    this.animatedValue.removeAllListeners()
  }

  hint = () => {
    if (this.rotation >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start()
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start()
    }
  }

  submitAnswer (answer) {
    const { cards } = this.props.deck
    const { currentCard } = this.state

    if (currentCard === cards.length - 1) {
      // user finished quiz, so set new notification
      clearLocalNotification()
        .then(setLocalNotification)
    }
    this.setState(state => ({
      ...state,
      currentCard: state.currentCard + 1,
      score: answer ? state.score + 1 : state.score
    }))

    // upon answering, flip card to show question
    this.animatedValue.setValue(0)
  }

  render () {
    const { currentCard, score } = this.state
    const { deck, navigation } = this.props

    const frontAnimation = {
        transform: [
          { rotateY: this.frontFlip }
        ],
        //https://github.com/facebook/react-native/issues/1973
        opacity: this.frontOpacity,
        zIndex: this.frontOpacity
      },
      backAnimation = {
        transform: [
          { rotateY: this.backFlip }
        ],
        //https://github.com/facebook/react-native/issues/1973
        opacity: this.backOpacity,
        zIndex: this.backOpacity
      }

    return (
      <View style={styles.container}>
        {currentCard === deck.cards.length // end of the quiz
          ? <View style={[styles.box, styles.result]}>
            <Text style={[styles.textCenter, styles.textRegular]}>You have finished your quiz!</Text>
            <Text style={styles.textMutted}>{`Congratz! Your score is ${score}/${deck.cards.length}`}</Text>
            <SubmitBtn
              onPress={() => {
                navigation.dispatch(NavigationActions.back())
              }}
              text={`Done`}
            />
            <SubmitBtn
              onPress={() => {
                this.setState({ currentCard: 0, score: 0 })
              }}
              text={`Start again`}
            />
          </View>
          : <View>
            <View style={styles.counter}>
              <Text>{`${currentCard + 1} / ${deck.cards.length}`}</Text>
            </View>
            <View style={styles.box}>
              <Animated.View style={[styles.flipCard, frontAnimation]}>
                <ScrollView>
                  <Text style={[styles.textCenter, styles.textBig]}>
                    {deck.cards[currentCard].question}
                  </Text>
                </ScrollView>
                <Text
                  style={styles.hint}
                  onPress={this.hint}>
                  Answer
                </Text>
              </Animated.View>
              <Animated.View
                style={[backAnimation, styles.flipCard, styles.flipCardBack]}>
                <ScrollView>
                  <Text style={[styles.textCenter, styles.textBig]}>
                    {deck.cards[currentCard].answer}
                  </Text>
                </ScrollView>
                <Text
                  style={styles.hint}
                  onPress={this.hint}>
                  Question
                </Text>
              </Animated.View>
            </View>
            <View style={styles.box}>
              <SuccessBtn onPress={() => this.submitAnswer(true)}/>
              <WrongBtn onPress={() => this.submitAnswer(false)}/>
            </View>
          </View>
        }
      </View>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const { deckTitle } = navigation.state.params
  return {
    deck: state[deckTitle.replace(/ /g, '')]
  }
}

export default connect(mapStateToProps)(Quiz)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: white,
    padding: 15,
    paddingTop: 30
  },
  counter: {
    flex: 1
  },
  flipCard: {
    width: 300,
    maxHeight: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flipCardBack: {
    position: 'absolute',
    top: 0
  },
  box: {
    flex: 2,
    alignItems: 'center'
  },
  result: {
    padding: 20,
    paddingTop: 50
  },
  textCenter: {
    textAlign: 'center'
  },
  textBig: {
    fontSize: 28
  },
  textRegular: {
    fontSize: 22
  },
  textMutted: {
    color: gray,
    fontSize: 14,
    marginBottom: 20
  },
  hint: {
    color: red,
    fontSize: 12
  }
})