import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DataSample from './DataSample';
export default function Detail({navigation, route}) {
    const DataSample= route.params;
  return (
    
    <View>
    <ImageBackground source={DataSample.image}
      style={{
            height: 200,
            width: 200,
            //padding: 10,
            //borderRadius: 7,
            //overflow: "hidden",
          }}
    />

    <Text style={{justifyContent:'center'}}>{DataSample.desc}</Text>
  
    </View>
  )
}

const styles = StyleSheet.create({})
