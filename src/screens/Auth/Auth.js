import React, {Component } from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import startMainTabs from '../MainTabs/StartMainTabs';

class AuthScreen extends Component{
    loginHandler =()=>{
        startMainTabs()
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Please Log In</Text>
                <Button title={"Switch to Login"}/>
                <TextInput placeholder={"Your E-Mail Adress"}/>
                <TextInput placeholder={"Password"}/>
                <TextInput placeholder={"Confirm Password"}/>
                <Button title="Submit" onPress={this.loginHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container : {
       //borderColor: "red",
       //borderWidth: 1
       flex :1,
       justifyContent:"center",
       alignItems:"center"
   }
});
export default AuthScreen;