import React from 'react';
import {View, Text, StyleSheet,Button } from 'react-native';

const pickLocation = props => (
    <View style={styles.container}>
        <View style={styles.placeHolder}><Text>Map</Text></View>
        <View style={styles.button}><Button title={"Locate Me"} onPress={() => alert("Pick Location!")} /></View>

    </View>
);

const styles= StyleSheet.create({
    container:{
        width: "100%",
        alignItems:"center"
    },
    button:{
        margin:8
    },
    placeHolder: {
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"#eee",
        width: "80%",
        height: 150
    }
});

export default pickLocation;