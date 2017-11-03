import * as TYPES from '../actions/types'

export default function decks (state = {}, action) {

  switch (action.type) {
    case TYPES.RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case TYPES.ADD_DECK:
      const { title } = action.deck
      return state[title] ? state : {
        ...state,
        [title]: {
          title: title,
          cards: []
        }
      }
    case TYPES.ADD_CARD:
      return {
        ...state,
        [action.deck.title]: {
          ...action.deck,
          cards: [...state[action.deck.title].cards, action.deck.cards] // check if that works and if can be written
          // better
        }
      }
    default:
      return state
  }
}