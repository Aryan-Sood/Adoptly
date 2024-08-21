import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:24,
    fontWeight:'bold',
    fontFamily:'outfit-bold'
  }
})