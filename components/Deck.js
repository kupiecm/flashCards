import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { SubmitBtn } from './Buttons'

class Deck extends Component {

  render () {
    const { deck, navigation } = this.props
    return (
      <View>
        <Text>{`Deck: ${deck.title}`}</Text>
        <Text>{`${deck.cards.length} cards`}</Text>
        <SubmitBtn
          onPress={() => {
            navigation.navigate(
              'NewCard',
              { deckTitle: deck.title }
            )
          }}
          text={`Add a card`}/>
        <SubmitBtn
          onPress={() => {
            navigation.navigate(
              'Quiz',
              { deckTitle: deck.title }
            )
          }}
          text={'Start quiz'}
          disabled={deck.cards.length === 0}
        />
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

export default connect(mapStateToProps)(Deck)