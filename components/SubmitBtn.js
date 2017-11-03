import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import {white, purple} from '../utils/colors'

const styles = StyleSheet.create({
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
  }
})

export default SubmitBtn = ({ onPress }) => (
  <TouchableOpacity
    style={styles.AndroidSubmitBtn}
    onPress={onPress}>
    <Text style={styles.submitBtnText}>SUBMIT</Text>
  </TouchableOpacity>
)