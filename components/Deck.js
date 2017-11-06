import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { SubmitBtn, AddBtn } from './Buttons'
import { gray } from '../utils/colors'

/*
  Detailed view with Deck info. Displays title and cards number. To buttons 'add card' and 'quiz' navigate to
  corresponding views
 */
class Deck extends Component {

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.deckTitle
  })

  componentDidMount() {
    const { deck, navigation } = this.props

    if (!deck) {
      navigation.navigate('Decks')
    }
  }

  render () {
    const { deck, navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.subtitle}>{`${deck.cards.length} ${deck.cards.length > 1 ? 'cards' : 'card'}`}</Text>
        </View>
        <View style={styles.buttons}>
          <AddBtn
            onPress={() => {
              navigation.navigate(
                'NewCard',
                { deckTitle: deck.title }
              )
            }}
            text={`Add a card`}/>
          {deck.cards.length > 0 &&
          <SubmitBtn
            onPress={() => {
              navigation.navigate(
                'Quiz',
                { deckTitle: deck.title }
              )
            }}
            text={'Start Quiz'}
            disabled={deck.cards.length === 0}
          />
          }
        </View>
      </View>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const { deckTitle } = navigation.state.params
  return {
    deck: state[deckTitle.replace(/ /g,'')]
  }
}

export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  info: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100
  },
  buttons: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontSize: 26
  },
  subtitle: {
    fontSize: 18,
    color: gray
  }
})