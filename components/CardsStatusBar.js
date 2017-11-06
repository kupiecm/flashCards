import React from 'react'
import { View, StatusBar } from 'react-native'
import { white } from '../utils/colors'
import { Constants } from 'expo'

export default CardsStatusBar = ({ ...props }) => (
  <View style={{ backgroundColor: white, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={white} {...props} />
  </View>
)