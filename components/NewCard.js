import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { addCard } from '../actions/index'
import SubmitBtn from './SubmitBtn'

class NewCard extends Component {

  submit = (card) => {
    const { dispatch } = this.props
    // set loafing to true
    dispatch(addCard(card))
    // clear input field
    // show feedback to user with action status (success, error)
    // move to certain Deck view
  }

  render () {
    return (
      <View>
        <Text>NewCard</Text>
        <SubmitBtn onPress={this.submit}/>
      </View>
    )
  }
}

export default connect()(NewCard)