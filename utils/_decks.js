import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'FlashCards:decks'

export function setDummyData (results) {

  if (results)
    return results

  let dummyData = {
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
    },
    Udacity: {
      title: 'Udacity',
      cards: [
        {
          question: 'Are you happy with the course?',
          answer: 'Yes'
        },
        {
          question: 'The answer for this question is loooong',
          answer: 'I hope ScrollView works here... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        }
      ]
    },
    anotherdecktoshowlistofdecks: {
      title: 'another deck to show list of decks',
      cards: []
    },
    nextone: {
      title: 'next one',
      cards: []
    },
    anotherone: {
      title: 'another one',
      cards: []
    }
  }

  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}