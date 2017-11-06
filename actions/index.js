import * as TYPES from './types'
import * as API from '../utils/api'

export const getDecks = () => dispatch => {
  return API.fetchDecks()
    .then(decks => {
      return dispatch({
        type: TYPES.RECEIVE_DECKS,
        decks: decks
      })
    })
}

export const addDeck = title => dispatch => {
  let deck = {
    title: title,
    cards: []
  }
  return API.submitDeck(deck)
    .then(() => {
      return dispatch({
        type: TYPES.ADD_DECK,
        deck: deck
      })
    })
    .catch(err => {
      console.log('Failed to add a card', err)
    })
}

export const addCard = (title, card) => dispatch => {
  return API.submitCard(title, card)
    .then(() => {
      return dispatch({
        type: TYPES.ADD_CARD,
        deckTitle: title,
        card: card
      })
    })
    .catch(err => {
      console.log('Failed to add a card', err)
    })
}