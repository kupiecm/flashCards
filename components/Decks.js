import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import DeckThumb from './DeckThumb'
import { getDecks } from '../actions/index'

class Decks extends Component {

  componentDidMount () {
    this.props.getDecks()
  }

  render () {
    const { decks, navigation } = this.props
    return (
      <View>
        {decks &&
        decks.map(deck => {
          return <DeckThumb
            key={deck.title}
            deck={deck}
            onPress={() => navigation.navigate(
              'Deck',
              { deckTitle: deck.title }
            )}/>
        })}
      </View>
    )
  }
}

function mapStateToProps (state) {
  return { decks: Object.keys(state).map(deck => (state[deck])) }
}

export default connect(mapStateToProps, { getDecks })(Decks)