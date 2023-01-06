import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TopTab from './TopTab';
import Setting from './Setting';
import Signout from './Signout';

const Drawer=createDrawerNavigator();
export default function INavigation({navigation}) {
  return (
    
      <Drawer.Navigator initialRouteName='TopTab'>
        <Drawer.Screen name='Home' component={TopTab} options={{headerTitle:'Museum Pool'}}/>
        <Drawer.Screen name='Setting' component={Setting} options={{headerShown:true}}/>
        <Drawer.Screen name='Signout' component={Signout} options={{headerShown:true}}/>
      </Drawer.Navigator>

   
  )
}

const styles = StyleSheet.create({})