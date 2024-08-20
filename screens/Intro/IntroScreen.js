import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import PrimaryButton from '../../components/PrimaryButton';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height

const webClientId = '679144562913-f7qa5k7dpeteh78b3hia045rteb20iui.apps.googleusercontent.com';
const androidClientId = '679144562913-sofp8msdv8s45t3rmp722qnhd8qjbsj2.apps.googleusercontent.com';
const iosClientId = '679144562913-uriqtqqletg60elg12ksjh82kflhe42d.apps.googleusercontent.com';

WebBrowser.maybeCompleteAuthSession();

const config = {
    webClientId,
    iosClientId,
    androidClientId
}


function googleLoginHandler(){

    
}

export default function IntroScreen() {

    const [request, response, promptAsync] = Google.useAuthRequest(config);
    console.log(request);
    console.log(response);

    const handleToken = () => {
        if (response?.type === 'success'){
            const {authentication} = response;
            const token = authentication?.accessToken;
            console.log('access token: ', accessToken)
        }
    }

    useEffect(() => {
        handleToken();
    },[response])


  return (
    <View style={styles.root}>
      <Image source={require('../../assets/images/login.png')} style={styles.image}/>
      <View style={styles.textContainer}>
            <Text style={styles.headerText}>Ready to make a new friend?</Text>
            <Text style={styles.footerText}>Adopt the pet you like and make your life less miserable</Text>
            <PrimaryButton text='Get Started' textColor='black' textSize={30} buttonColor='orange' onPress={()=> promptAsync()} style = {styles.button}/>
      </View>
    </View>
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