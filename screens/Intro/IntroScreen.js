import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import React from 'react'
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height

export default function IntroScreen() {

    const navigation = useNavigation();

    function pageHandler(){
        navigation.navigate('Base')
    }


  return (
    <>
    <StatusBar style='inverted' />
    <View style={styles.root}>
      <Image source={require('../../assets/images/login.png')} style={styles.image}/>
      <View style={styles.textContainer}>
            <Text style={styles.headerText}>Ready to make a new friend?</Text>
            <Text style={styles.footerText}>Adopt the pet you like and make your life less miserable</Text>
            <PrimaryButton text='Get Started' textColor='black' textSize={30} buttonColor='orange' onPress={pageHandler} style = {styles.button}/>
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    image:{
        width:'100%',
        height:height*0.65
    },
    textContainer:{
        flex:1,
        flexDirection:'column',
        paddingVertical:20,
        alignItems:'center'
    },
    headerText:{
        fontFamily:'outfit-bold',
        fontSize:32,
        textAlign:'center',
    },
    footerText:{
        fontSize:24,
        fontFamily:'outfit-medium',
        textAlign:'center',
        marginTop:20
    },
    button:{
        marginTop:40
    },
})