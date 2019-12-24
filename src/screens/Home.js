import React from 'react';
import {TouchableOpacity,View, Text} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationNativeContainer,} from "@react-navigation/native";
import {Constants, Style} from "../configs/theme";
import SearchScreen from './SearchScreen';
import ListCar from './ListCar';
import Ionicons from 'react-native-vector-icons/Ionicons'


const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
    return (
        <NavigationNativeContainer>
            <HomeStack.Navigator>
                <HomeStack.Screen
                    name="Home"
                    component={ListCar}
                    options={({navigation}) => ({
                        headerStyle: {
                            backgroundColor: '#2196f3',
                            ...Style.disableShadow
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRightContainerStyle: {
                            paddingRight: Constants.pad
                        },
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                                <Ionicons name="ios-search" size={25} color="white"/>
                            </TouchableOpacity>
                        ),
                    })}
                />
                <HomeStack.Screen
                    name="Search"
                    component={SearchScreen}
                />
            </HomeStack.Navigator>
        </NavigationNativeContainer>
    );
};

export default HomeStackScreen;
