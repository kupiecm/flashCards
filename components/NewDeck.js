import React, { Component } from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, View, Text, TextInput, StyleSheet } from 'react-native'
import { addDeck } from '../actions/index'
import { SubmitBtn } from './Buttons'
import { gray, black, white } from '../utils/colors'

class NewDeck extends Component {

  state = {
    title: ''
  }

  submit = () => {
    const { title } = this.state
    const { dispatch, navigation } = this.props

    dispatch(addDeck(title))
    navigation.navigate('Decks')
  }

  render () {
    const { title } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
          <TextInput
            style={styles.input}
            placeholder="Deck title..."
            value={title}
            onChangeText={title => this.setState({ title })}
          />
          <SubmitBtn onPress={this.submit}/>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: white,
    padding: 20
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    padding: 20,
    paddingTop: 40,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: gray,
    borderRadius: 4,
    color: black,
    height: 40,
    width: 300,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
})

export default connect()(NewDeck)