import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { purple, white } from '../utils/colors'
import { addDeck } from '../actions/index'

class NewDeck extends Component {

  submit = () => {
    const {dispatch, navigation } = this.props
    dispatch(addDeck('oleasdasd'))
    // console.log(navigation)
    // navigation.navigate('Decks')
  }

  render () {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TouchableOpacity
          style={styles.AndroidSubmitBtn}
          onPress={this.submit}>
          <Text style={styles.submitBtnText}>SUBMIT</Text>
        </TouchableOpacity>
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
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
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