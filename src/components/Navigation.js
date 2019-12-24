import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import {colors} from '../configs/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import Favorite from '../screens/Favorite';
import Notification from '../screens/Notification';
import Account from '../screens/Account';

const BottomNavigation = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Trang chủ',
                tabBarIcon: ({tintColor}) => (
                    <FontAwesome name="home" color={tintColor} size={20}/>
                ),
                activeColor: colors.home,
            },
        },
        Favorite: {
            screen: Favorite,
            navigationOptions: {
                title: 'Yêu thích',
                tabBarIcon: ({tintColor}) => (
                    <Feather name="map-pin" color={tintColor} size={20}/>
                ),
                activeColor: colors.favorite,
            },
        },
        Notification: {
            screen: Notification,
            navigationOptions: {
                title: 'Hộp thư',
                tabBarIcon: ({tintColor}) => (
                    <Feather name="mail" color={tintColor} size={20}/>
                ),
                activeColor: colors.mail
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                title: 'Tài khoản',
                tabBarIcon: ({tintColor}) => (
                    <MaterialIcons name="account-circle" color={tintColor} size={20}/>
                ),
                activeColor: colors.account,
            }
        }
    },
    {
        initialRouteName: 'Home',
        inactiveColor: colors.disable,
        barStyle: {backgroundColor: colors.white},
    }
)

export default createAppContainer(BottomNavigation)
