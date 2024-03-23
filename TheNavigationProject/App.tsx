


import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';

function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.wrapper}>

    
      <MapView style={styles.map}
    initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.1122,
    longitudeDelta: 0.1421,
  }}
  
      >  
        </MapView>

      {/* <View style={styles.goContainer}> */}
      
    {/* <Pressable style={styles.goButton}> */}
    <View style={{flex:1}}>
      <View style={{flex:1}}/>
  
        <Text style={{fontSize:60, color:'#FFF', textAlign: 'center'}}>Go!</Text>
      
     <View style={{flex:1}}/>
    </View>
    {/* </Pressable> */}
    {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

wrapper: {
  flex: 1,
  backgroundColor: "#262929"
},

/* the flex here adjusts the area UNDER the map (the one with the button!) (1/5) */
map: {
flex: 4,

},

goContainer: { 


},

goButton: {
  color: '#FCF8F1',
  textAlign: 'center',
  textAlignVertical: 'center',
  
}


}
)


export default App;
