import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default DeckThumb = ({ deck, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{`I am deck ${deck.title} with ${deck.cards ? deck.cards.length : 0} cards`}</Text>
  </TouchableOpacity>
)