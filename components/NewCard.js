import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { addCard } from '../actions/index'
import SubmitBtn from './SubmitBtn'

class NewCard extends Component {

  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const { question, answer } = this.state
    const { navigation, addCard, deckTitle } = this.props
    addCard(deckTitle, { question, answer })
    navigation.dispatch(NavigationActions.back())
  }

  render () {
    return (
      <View>
        <Text>NewCard</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Question..."
          onChangeText={question => this.setState({ question })}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Answer..."
          onChangeText={answer => this.setState({ answer })}
        />
        <SubmitBtn onPress={this.submit}/>
      </View>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const { deckTitle } = navigation.state.params
  return { deckTitle }
}

export default connect(mapStateToProps, { addCard })(NewCard)