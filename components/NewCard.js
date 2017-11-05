import React, { Component } from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, View, TextInput, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { addCard } from '../actions/index'
import { SubmitBtn } from './Buttons'
import { black, gray, white } from '../utils/colors'

class NewCard extends Component {

  static navigationOptions = () => ({
    title: `Add Card`
  })

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
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.inputs}>
          <TextInput
            value={question}
            style={styles.input}
            placeholder="Question..."
            onChangeText={question => this.setState({ question })}
          />
          <TextInput
            value={answer}
            style={styles.input}
            placeholder="Answer..."
            onChangeText={answer => this.setState({ answer })}
          />
        </View>
        <View style={styles.submit}>
          <SubmitBtn onPress={this.submit}/>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const { deckTitle } = navigation.state.params
  return { deckTitle }
}

export default connect(mapStateToProps, { addCard })(NewCard)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white
  },
  inputs: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60
  },
  submit: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: gray,
    borderRadius: 4,
    color: black,
    height: 40,
    width: 240,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
})