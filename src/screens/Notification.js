import React from 'react';
import {View, Text} from "react-native";
import {
    createStackNavigator
} from 'react-navigation-stack';
import {createAppContainer , SafeAreaView} from 'react-navigation';
import {colors} from "../configs/theme";

const Notification = () => {
    return (
        <View style={{flex: 1}}>
            <Text>Notification</Text>
        </View>
    );
};

Notification.navigationOptions = {
    headerStyle: {
        backgroundColor: colors.mail,
    }
}
let Notify = createStackNavigator({Notification});
export default createAppContainer(Notify);
