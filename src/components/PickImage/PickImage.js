import React from 'react';
import {View, Image, StyleSheet,Button } from 'react-native';

import imagePlaceHolder from '../../assets/beautiful-place.jpg'

const pickImage = props => (
    <View style={styles.container}>
        <View style={[styles.placeHolder]}>
            <Image source={imagePlaceHolder} style={[styles.previewImage]}/>
        </View>

        <View style={[styles.button]}>
            <Button title={"Pick Image"} onPress={() => alert("Pick Image")} />
        </View>

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
},
    previewImage:{
    width:"100%",
    height:"100%"
}
});

export default pickImage;