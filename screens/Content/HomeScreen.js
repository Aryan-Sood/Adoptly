import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <>
    <SafeAreaView/>
    <ScrollView>
    <View style={styles.root}>
      <View style={styles.greetingsView}>
        <Text style= {[styles.greetingsText, {color: 'orange'}]}>Good Morning, </Text>
        <Text style={[styles.greetingsText]}>Aryan</Text>
        
      </View>
    </View>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  },
  text:{
    fontSize:24,
    fontWeight:'bold',
    fontFamily:'outfit-bold'
  },
  greetingsView:{
    marginTop:20,
    marginLeft:12,
    flexDirection:'row'
  },
  greetingsText:{
    fontSize:27,
    fontWeight:'500',
    fontFamily:'outfit-medium'
  }
})