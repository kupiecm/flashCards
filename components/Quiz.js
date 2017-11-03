import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { SuccessBtn, WrongBtn } from './Buttons'

export default class Quiz extends Component {

  state = {
    currentCard: 0,
    score: 0
  }

  submitAnswer (answer) {
    const { cards } = this.props.deck

    this.setState(state => ({
      ...state,
      currentCard: state.currentCard === cards.length - 1 ? -1 : state.currentCard + 1,
      score: answer ? state.score + 1 : state.score
    }))
  }

  render () {
    const { currentCard, score } = this.state
    const { cards } = this.props.deck

    return (
      <View>
        <Text>Quiz</Text>
        {currentCard === -1
          ? <View>
            <Text>You have finished your quiz!</Text>
            <Text>{`Congratz! Your score is ${score} / ${cards.length}`}</Text>
          </View>
          : <View>
            <Text>{`Question ${currentCard} / ${cards.length}: ${cards[currentCard].question}`}</Text>
            <Text>{`Answer ${currentCard}: ${cards[currentCard].answer}`}</Text>
            <SuccessBtn onPress={this.submitAnswer(true)}/>
            <WrongBtn onPress={this.submitAnswer(false)}/>
          </View>
        }
      </View>
    )
  }
}