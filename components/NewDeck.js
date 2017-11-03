import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { white } from '../utils/colors'
import { addDeck } from '../actions/index'
import { SubmitBtn } from './Buttons'

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
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="NEw deck title..."
          onChangeText={title => this.setState({ title })}
        />
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