import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import DeckThumb from './DeckThumb'
import { getDecks } from '../actions/index'

class Decks extends Component {

  componentDidMount () {
    getDecks()
  }

  render () {
    const { decks } = this.props
    return (
      <View>
        {decks &&
        decks.map(deck => {
          console.log(deck)
          return <DeckThumb key={deck.title} deck={deck}/>
        })}
      </View>
    )
  }
}

function mapStateToProps (state) {
  return { decks: Object.keys(state).map(deck => (state[deck])) }
}

export default connect(mapStateToProps, { getDecks })(Decks)