import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from '../screens/Intro/IntroScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';
import HomeScreen from '../screens/Content/HomeScreen';
import TabNavigation from '../navigation/TabNavigation';


const Stack = createNativeStackNavigator();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf')
  });

  useEffect(() => {
    if (!loaded || error){
      SplashScreen.hideAsync();
    }
  },[loaded,error])


  return (
    <>
    <StatusBar style='inverted' />
    <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen name='Intro' component={IntroScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Base' component={TabNavigation} options={{headerShown: false}} />
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
