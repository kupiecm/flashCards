import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { SuccessBtn, WrongBtn, SubmitBtn } from './Buttons'
import { NavigationActions } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../utils/notifications'

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
      <View>
        <Text>Quiz</Text>
        {currentCard === deck.cards.length
          ? <View>
            <Text>You have finished your quiz!</Text>
            <Text>{`Congratz! Your score is ${score} / ${deck.cards.length}`}</Text>
            <SubmitBtn onPress={() => {navigation.dispatch(NavigationActions.back())}} text={`Done`}/>
          </View>
          : <View>
            {showAnswer
              ? <Text>{`Answer ${currentCard + 1}: ${deck.cards[currentCard].answer}`}</Text>
              : <Text>{`Question ${currentCard + 1} / ${deck.cards.length}: ${deck.cards[currentCard].question}`}</Text>
            }
            <Text onPress={() => this.setState({ showAnswer: !showAnswer })}>{showAnswer ? `Question` : `Answer`}</Text>
            <SuccessBtn onPress={() => this.submitAnswer(true)}/>
            <WrongBtn onPress={() => this.submitAnswer(false)}/>
          </View>
        }
      </View>
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