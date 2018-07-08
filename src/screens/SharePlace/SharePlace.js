import React , {Component} from 'react';

import {View, Text,Button, StyleSheet,ScrollView} from 'react-native';
import { connect } from 'react-redux';

import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PickLocation from '../../components/PickLocation/PickLocation'

import PickImage from '../../components/PickImage/PickImage';

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

                    <PickImage />

                    <PickLocation />

                    <PlaceInput />

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
});

const mapDispatchToProps = dispatch=> {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))

    };
};

export default connect(null,mapDispatchToProps)(SharePlaceScreen);