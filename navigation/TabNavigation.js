import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Content/HomeScreen';
import ProfileScreen from '../screens/Content/ProfileScreen';
import LikesScreen from '../screens/Content/LikesScreen';
import MessagesScreen from '../screens/Content/MessagesScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();


export default function TabNavigation() {
  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarLabelStyle: styles.tabLabel,
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor:'blue',}}>
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarLabel:'Home',
                tabBarIcon: ()=> <Ionicons name="home" size={24} color="black" />}} />
            <Tab.Screen name='Likes' component={LikesScreen} options={{
                tabBarLabel:'Likes',
                tabBarIcon: ()=> <Ionicons name="heart" size={24} color="black" />}} />
            <Tab.Screen name='Messages' component={MessagesScreen} options={{
                tabBarLabel:'Messages',
                tabBarIcon: ()=> <MaterialCommunityIcons name="message" size={24} color="black" />}} />
            <Tab.Screen name='Profile' component={ProfileScreen} options={{
                tabBarLabel:'Profile',
                tabBarIcon: ()=> <Ionicons name="person" size={24} color="black" />}} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
    tabLabel:{
        fontWeight: 'bold',
        fontFamily: 'outfit-bold',
        fontSize:12
    }
})