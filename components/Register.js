import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Login from './Login'
export default function Register({navigation}) {
  return (
    <View>
      <Text>Register Form</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}><Text>Login</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})