import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React from "react";
import DataSample from './DataSample';
import Detail from "./Detail";
const { width } = Dimensions.get("screen");

export default function Home({ navigation }) {
  

  const Item = ({ DataSample }) => {
    return (
      <TouchableOpacity onPress={()=>{navigation.navigate('Detail',DataSample)}} >
        <ImageBackground
          source={DataSample.image}
          style={{
            height: 200,
            width: width - 40,
            padding: 10,
            borderRadius: 7,
            overflow: "hidden",
          }}
        >
          <Text style={{ color: "red", fontWeight: "bold" }}>
            {DataSample.desc}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", width: "100%", borderWidth: 1 }}>
        <TextInput
          style={{
            width: "80%",
            height: 35,
            marginLeft: 5,
            marginRight: 5,
            paddingLeft: 10,
          }}
          placeholder="Enter the museum name "
        />
        <Button style={{ width: "20%", height: 40 }} title="SEARCH" />
      </View>
      <View>
        <FlatList
          //horizontal
          data={DataSample}
          renderItem={({ item }) => <Item DataSample={item} />}
          //keyExtractor={(item,index)=>index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    //alignItems:"center",
    //justifyContent:'center',
  },
});
