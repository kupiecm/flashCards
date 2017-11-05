import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { SuccessBtn, WrongBtn, SubmitBtn } from './Buttons'
import { NavigationActions } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../utils/notifications'
import { white, red, gray } from '../utils/colors'

class Quiz extends Component {

  state = {
    currentCard: 0,
    score: 0,
    showAnswer: false
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
  }

  render () {
    const { currentCard, score, showAnswer } = this.state
    const { deck, navigation } = this.props

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {currentCard === deck.cards.length
          ? <View style={[styles.box, styles.result]}>
            <Text style={[styles.textCenter, styles.textRegular]}>You have finished your quiz!</Text>
            <Text style={styles.textMutted}>{`Congratz! Your score is ${score}/${deck.cards.length}`}</Text>
            <SubmitBtn
              onPress={() => {
                navigation.dispatch(NavigationActions.back())
              }}
              text={`Done`}
            />
          </View>
          : <View>
            <View style={styles.counter}>
              <Text>{`${currentCard + 1} / ${deck.cards.length}`}</Text>
            </View>
            <View style={styles.box}>
              <Text style={[styles.textCenter, styles.textBig]}>
                {showAnswer ? deck.cards[currentCard].answer : deck.cards[currentCard].question}
              </Text>
              <Text
                style={styles.hint}
                onPress={() => this.setState({ showAnswer: !showAnswer })}>
                {showAnswer ? `Question` : `Answer`}
              </Text>
            </View>
            <View style={styles.box}>
              <SuccessBtn onPress={() => this.submitAnswer(true)}/>
              <WrongBtn onPress={() => this.submitAnswer(false)}/>
            </View>
          </View>
        }
      </ScrollView>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const { deckTitle } = navigation.state.params
  return {
    deck: state[deckTitle]
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