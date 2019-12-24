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
import {getData} from './src/configs/googlesheet';

const App: () => React$Node = () => {

    return (
        <View style={{flex: 1}}>
            <Navigation/>
        </View>
    );
};
export default App;
