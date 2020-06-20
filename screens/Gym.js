import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';

export default class Gym extends React.Component{
    render(){
        return(
            <View>
                <View>
                <Image
                source={require("../assets/gym.png")}
                style={{width:200, height: 200}}/>
                </View>
            </View>
        )
    }
}