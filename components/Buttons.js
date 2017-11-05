import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { white, black, red, green } from '../utils/colors'

export function SubmitBtn ({ onPress, text, ...props }) {
  return (
    <TouchableOpacity
      style={[styles.AndroidBtn, styles.submitBtn]}
      onPress={onPress}
      disabled={props.disabled}>
      <Text style={styles.btnText}>{text ? text : `SUBMIT`}</Text>
    </TouchableOpacity>
  )
}

export function AddBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={[styles.AndroidBtn, styles.btnAdd]}
      onPress={onPress}>
      <Text style={styles.addText}>Add Card</Text>
    </TouchableOpacity>
  )
}

export function SuccessBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={[styles.AndroidBtn, styles.successBtn]}
      onPress={onPress}>
      <Text style={styles.btnText}>Right</Text>
    </TouchableOpacity>
  )
}

export function WrongBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={[styles.AndroidBtn, styles.wrongBtn]}
      onPress={onPress}>
      <Text style={styles.btnText}>Incorrect</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  AndroidBtn: {
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 5,
    height: 45,
    width: 200,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: black,
    borderWidth: 1
  },
  submitBtn: {
    backgroundColor: black
  },
  btnAdd: {
    backgroundColor: white
  },
  successBtn: {
    backgroundColor: green
  },
  wrongBtn: {
    backgroundColor: red
  },
  btnText: {
    color: white,
    textAlign: 'center',
    fontSize: 16
  },
  addText: {
    color: black
  }
})
