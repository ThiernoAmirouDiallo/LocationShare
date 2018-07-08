import React , {Component} from 'react';

import {View, Text,Button, TextInput,StyleSheet,ScrollView,Image} from 'react-native';
import { connect } from 'react-redux';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';

import imagePlaceHolder from '../../assets/beautiful-place.jpg'

import {addPlace} from '../../store/actions/index';

class SharePlaceScreen extends Component{
    constructor(props){
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event =>{
        if (event.type==="NavBarButtonPress")
        {
            if (event.id==="sideDrawerToggle")
            {
                this.props.navigator.toggleDrawer({
                    side: "left"
                })
            }
        }

    }
    placeAddedHandler = placeName =>{
        this.props.onAddPlace(placeName);
    }
    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share a Place with us</HeadingText>
                    </MainText>
                    <View style={styles.placeHolder}>
                        <Image source={imagePlaceHolder} style={styles.previewImage}/>
                    </View>
                    <View style={styles.button}><Button title={"Pick Image"} /></View>
                    <View style={styles.placeHolder}><Text>Map</Text></View>
                    <View style={styles.button}><Button title={"Locate Me"} /></View>
                    <DefaultInput placeholder="Place Name" />
                    <View style={styles.button}><Button title={"Share the Place!"} /></View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center"
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

const mapDispatchToProps = dispatch=> {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))

    };
};

export default connect(null,mapDispatchToProps)(SharePlaceScreen);