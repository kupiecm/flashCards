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
      let deckName = title.replace(/ /g,'')
      return state[deckName] ? state : {
        ...state,
        [deckName]: {
          title: title,
          cards: []
        }
      }
    case TYPES.ADD_CARD:
      return {
        ...state,
        [action.deckTitle]: {
          ...state[action.deckTitle],
          cards: [...state[action.deckTitle].cards, action.card] // check if that works and if can be written
          // better
        }
      }
    default:
      return state
  }
}