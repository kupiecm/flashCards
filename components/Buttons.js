import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { white, purple, red, green } from '../utils/colors'

const styles = StyleSheet.create({
  AndroidBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtn: {
    backgroundColor: purple,
  },
  successBtn: {
    backgroundColor: green,
  },
  wrongBtn: {
    backgroundColor: red,
  },
  btnText: {
    color: white,
    textAlign: 'center'
  }
})

export function SubmitBtn ({ onPress }) {
  return (<TouchableOpacity
    style={[styles.AndroidBtn, styles.submitBtn]}
    onPress={onPress}>
    <Text style={[styles.btnText, {fontSize: 22}]}>SUBMIT</Text>
  </TouchableOpacity>)
}

export function SuccessBtn ({ onPress }) {
  return (<TouchableOpacity
    style={[styles.AndroidBtn, styles.successBtn]}
    onPress={onPress}>
    <Text style={[styles.btnText, {fontSize: 18}]}>Right</Text>
  </TouchableOpacity>)
}

export function WrongBtn ({ onPress }) {
  return (<TouchableOpacity
    style={[styles.AndroidBtn, styles.wrongBtn]}
    onPress={onPress}>
    <Text style={styles.btnText}>Wrong</Text>
  </TouchableOpacity>)
}