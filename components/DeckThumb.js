import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'

export default DeckThumb = ({ deck, onPress }) => (
  <TouchableOpacity style={styles.thumb} onPress={onPress}>
    <Text style={styles.title}>{deck.title}</Text>
    <Text style={styles.cards}>{`${deck.cards ? deck.cards.length : 0} cards`}</Text>
  </TouchableOpacity>
)


const styles = StyleSheet.create({
  thumb: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    borderBottomWidth: 0.5,
    borderColor: gray
  },
  title: {
    fontSize: 22,
    textAlign: 'center'
  },
  cards: {
    fontSize: 16,
    color: gray
  }
})