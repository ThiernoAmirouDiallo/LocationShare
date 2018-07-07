import React, {Component } from 'react';
import {View, Text, Button} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import startMainTabs from '../MainTabs/StartMainTabs';

class AuthScreen extends Component{
    loginHandler =()=>{
        startMainTabs()
    }

    render(){
        return(
            <View>
                <Icon size={30} name="ios-trash" color="red"/>
                <Text>Auth Screen</Text>
                <Button title="Login" onPress={this.loginHandler}/>
            </View>
        );
    }
}

export default AuthScreen;