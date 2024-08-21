import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import CategoriesList from '../../components/CategoriesList';


const width = Dimensions.get('window').width;

export default function HomeScreen() {


  return (
    <>
    <StatusBar style='inverted'/>
    <SafeAreaView>
    <ScrollView  >
    <View style={styles.root}>

      <View style={styles.greetingsView}>
        <Text style= {[styles.greetingsText, {color: 'orange'}]}>Good Morning, </Text>
        <Text style={[styles.greetingsText]}>Aryan</Text>
      </View>

      <View style={styles.sliderView}>
        <Image resizeMode='fill' style={[styles.sliderImage]} source={require('../../assets/images/adopt.jpg')}/>
      </View>

      <View>
        <Text style={[styles.greetingsText, {marginLeft:12, marginTop:20}]}>Category</Text>
        <CategoriesList style={[styles.category]} />
      </View>


    </View>
    </ScrollView>
    </SafeAreaView>
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
  },
  sliderView:{
    width:width*0.9,
    height:150,
    marginTop:15,
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:10,
  },
  sliderImage:{
    width:'100%',
    height:'100%',
    borderRadius:10
  },
  category:{
    marginTop:10
  },
  categoryView:{
    marginLeft:12
  }
})