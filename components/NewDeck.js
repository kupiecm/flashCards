import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { white } from '../utils/colors'
import { addDeck } from '../actions/index'
import { SubmitBtn } from './Buttons'

class NewDeck extends Component {

  submit = () => {
    const { dispatch, navigation } = this.props
    dispatch(addDeck('totally new deck'))
    // console.log(navigation)
    // navigation.navigate('Decks')
  }

  render () {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <SubmitBtn onPress={this.submit}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  }
})

export default connect()(NewDeck)