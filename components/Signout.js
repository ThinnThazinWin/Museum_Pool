import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import Login from "./Login";

export default function Signout({ navigation }) {
  return (
    <View style={{alignItems:'center',}}>
      <TouchableOpacity style={{width:200,height:30,borderWidth:1,borderRadius:10,alignItems:'center'}} onPress={()=>{navigation.navigate('Login')}}>
        <Text>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:200,height:30,borderWidth:1,borderRadius:10,alignItems:'center'}} onPress={()=>{navigation.navigate('Login')}}>
        <Text>Sign in with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
