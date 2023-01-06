import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//import INavigation from './INavigation';
//import Register from './Register';
export default function Login({navigation}) {
  return (
    <View>
    <View style={{marginHorizontal:20}}>
      <Text>User Name</Text>
      <TextInput style={{borderWidth:1,borderRadius:10,width:'99%',height:40}}/>
      <Text>Password</Text>
      <TextInput secureTextEntry={true} style={{borderWidth:1,borderRadius:10,width:'99%',height:40}}/>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-evenly', marginTop:10}}>
    <TouchableOpacity style={{width:100,height:30,borderWidth:1,borderRadius:10,alignItems:'center'}} onPress={()=>{navigation.navigate('INavigation')}}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:100,height:30,borderWidth:1,borderRadius:10,alignItems:'center'}} onPress={()=>{navigation.navigate('Register')}}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
      
    </View>
  )
}

const styles = StyleSheet.create({})