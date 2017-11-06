import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import { setLocalNotification } from './utils/notifications'
import { white } from './utils/colors'

import MainNavigator from './components/Navigation'
import CardsStatusBar from './components/CardsStatusBar'

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
