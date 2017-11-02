import * as TYPES from '../actions/types'

let initialState = {
  React: {
    title: 'React',
    cards: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    cards: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export default function decks (state = {}, action) {

  switch (action.type) {
    case TYPES.RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case TYPES.ADD_DECK:
      return state[action.title] !== null
        ? state
        : {
          ...state,
          [action.title]: []
        }
    case TYPES.ADD_CARD:
      return {
        ...state,
        [action.deck.title]: {
          ...action.deck.title,
          cards: [...action.deck.title.cards, action.deck.cards] // check if that works and if can be written better
        }
      }
    default:
      return state
  }
}