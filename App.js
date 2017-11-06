import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import { setLocalNotification } from './utils/notifications'
import { white } from './utils/colors'

import MainNavigator from './components/Navigation'
import CardsStatusBar from './components/CardsStatusBar'

/*
  App component is built with StatusBar and MainNavigator component responsible for wrapping all app's views
  to create user-friendly navigation. Everything is wrapped by provider to connect all components with redux store.
  Redux is used together with AsyncStorage (utlis/api.js) to maintain app's state. On all actions like get, save cards,
   decks,
  additional save to AsyncStorage is done by calling API in redux actions.
 */

export default class App extends React.Component {

  componentDidMount () {
    setLocalNotification()
  }

  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <CardsStatusBar barStyle="light-content"/>
          <MainNavigator/>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  }
})
