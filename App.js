/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useEffect} from 'react';
import {View,} from 'react-native';
import Navigation from './src/components/Navigation';

const App: () => React$Node = () => {

    useEffect(()=>{
        const url = 'https://sheets.googleapis.com/v4/spreadsheets/1dWcQSzmeFpVPNno01WXovj6072xW0JbRQzg0IVjYFbQ/values/Sheet1!E4:G5?key=AIzaSyA-UXoZqJhkIXOK0RaGOQXAubeX1QXAUSM'
        fetch(url).then(response=> response.json()).then(res=>console.log('data',res.values))
    })
    return (
        <View style={{flex: 1}}>
            <Navigation/>
        </View>
    );
};
export default App;
