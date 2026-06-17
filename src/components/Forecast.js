import React from "react";
import {View,Text,Image,ScrollView} from "react-native";

export default function Forecast({data,unit}){

 const days=data.list.filter((_,i)=>i%8===0);

 return (
 <ScrollView horizontal>
 {
 days.map(day=>(
  <View key={day.dt}
   style={{
    backgroundColor:"white",
    padding:15,
    margin:10,
    borderRadius:15
   }}>
   <Text>{new Date(day.dt_txt).toLocaleDateString()}</Text>
   <Image
    style={{width:60,height:60}}
    source={{
     uri:`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`
    }}
   />
   <Text>{day.main.temp.toFixed(1)}°{unit}</Text>
  </View>
 ))
 }
 </ScrollView>
 );
}