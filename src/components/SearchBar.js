import React,{useState} from "react";
import {View,TextInput,Button} from "react-native";

export default function SearchBar({onSearch}){

 const [city,setCity]=useState("");

 return (
  <View style={{margin:20}}>
   <TextInput
    placeholder="Enter city"
    value={city}
    onChangeText={setCity}
    style={{
     backgroundColor:"#fff",
     padding:15,
     borderRadius:20
    }}
   />
   <Button title="Search" onPress={()=>onSearch(city)}/>
  </View>
 );
}