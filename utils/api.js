import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, setDummyData } from './_decks'

export function fetchDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(JSON.parse)
    .then(setDummyData)
}

export function submitDeck (deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deck.title]: deck
  }))
}

export function submitCard (deckTitle, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(JSON.parse)
    .then(decks => {
      decks[deckTitle].cards.push(card)
      return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
    })
}