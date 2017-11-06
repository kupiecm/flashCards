import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList, StyleSheet } from 'react-native'
import DeckThumb from './DeckThumb'
import { getDecks } from '../actions/index'
import { white } from '../utils/colors'

/*
  Main app's view. Lists all available decks. Each deck is a button to view detailed view of certain deck.
  When changing view, title of the deck is sent to Deck component, where it is used to fetch whole deck info from state
 */

class Decks extends Component {
  componentDidMount () {
    this.props.getDecks()
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props
    return <DeckThumb
      deck={item}
      onPress={() => navigation.navigate(
        'Deck',
        { deckTitle: item.title }
      )}/>
  }

  render () {
    const { decks } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

function mapStateToProps (state) {
  return { decks: Object.keys(state).map(deck => (state[deck])) }
}

export default connect(mapStateToProps, { getDecks })(Decks)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: white
  }
})