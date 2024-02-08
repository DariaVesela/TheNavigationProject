/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View } from 'react-native';


function App(): JSX.Element {

  return (
    <View style={{backgroundColor:"red", height:"100%"}}>
      <View style={{backgroundColor:"grey", height:"10%"}}>
        <Text style={{
          textAlign:'center',
          fontSize:25
        }

        }>Hello!</Text>
      </View>
      <View style={{backgroundColor:"purple", height:"70%"}}></View>
      <View style={{backgroundColor:"yellow", height:"20%"}}></View>
    </View>

    );
}



export default App;
