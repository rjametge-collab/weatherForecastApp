import React from "react";
import {View,Text,Image} from "react-native";

export default function WeatherCard({weather,unit}){

 let temp=weather.main.temp;
 if(unit==="F") temp=(temp*9/5)+32;

 return (
 <View style={{
  backgroundColor:"#fff",
  padding:25,
  margin:20,
  borderRadius:20
 }}>
  <Text style={{fontSize:25}}>{weather.name}</Text>

  <Image
   style={{width:100,height:100}}
   source={{
    uri:`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
   }}
  />

  <Text style={{fontSize:40}}>
   {temp.toFixed(1)}°{unit}
  </Text>

  <Text>Humidity: {weather.main.humidity}%</Text>
  <Text>Wind: {weather.wind.speed} m/s</Text>
  <Text>{weather.weather[0].description}</Text>
 </View>
 );
}