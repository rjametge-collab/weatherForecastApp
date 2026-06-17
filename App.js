import React, {useState} from "react";
import {SafeAreaView, Text, Button, Alert} from "react-native";

import SearchBar from "./src/components/SearchBar";
import WeatherCard from "./src/components/WeatherCard";
import Forecast from "./src/components/Forecast";
import {getWeather, getForecast} from "./src/services/weatherApi";
import styles from "./src/styles";

export default function App(){

 const [weather,setWeather]=useState(null);
 const [forecast,setForecast]=useState(null);
 const [unit,setUnit]=useState("C");

 const search = async(city)=>{
   try{
    const w=await getWeather(city);
    const f=await getForecast(city);
    setWeather(w);
    setForecast(f);
   }catch{
    Alert.alert("Error","City not found. Try again.");
   }
 };

 return (
 <SafeAreaView style={styles.container}>
   <Text style={styles.title}>🌤 Weather App</Text>

   <SearchBar onSearch={search}/>

   <Button
    title={`Switch °${unit}`}
    onPress={()=>setUnit(unit==="C"?"F":"C")}
   />

   {weather &&
    <WeatherCard weather={weather} unit={unit}/>
   }

   {forecast &&
    <Forecast data={forecast} unit={unit}/>
   }

 </SafeAreaView>
 );
}