import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import Deck from './Deck'
import { getDecks } from '../actions/index'

class Decks extends Component {

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(getDecks())
  }

  render () {
    const { decks } = this.props
    return (
      <View>
        {decks &&
        decks.map(deck => {
          console.log(deck)
          return <Deck key={deck.title} deck={deck}/>
        })}
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    decks: Object.keys(state).map(deck => {
      console.log(state[deck])
      return state[deck]
    })
  }
}

export default connect(mapStateToProps)(Decks)