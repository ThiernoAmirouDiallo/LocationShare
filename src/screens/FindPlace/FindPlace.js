import React , {Component} from 'react';
import {View, TouchableOpacity,Text, StyleSheet} from 'react-native';

import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';


class FindPlaceScreen extends Component{
    state = {
        placesLoaded: false
    }
    static navigatorStyle = {
        navBarButtonColor : "orange"
    }

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

    placesSearchHandler = () => {
        this.setState({
            placesLoaded: true
        });
    }
    
    onItemSelectedHandler= key => {
        const selPlace =this.props.places.find(place => {
            return place.key=== key
        });

        this.props.navigator.push({
            screen: "awesome-places.PlaceDetailScreen",
            title: selPlace.name,
            passProps: {
                selectedPlace: selPlace
            }
        })
    }
    render(){
        let content = (
            <TouchableOpacity onPress={this.placesSearchHandler}>
                <View style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>
                        Find Places
                    </Text>
                </View>
            </TouchableOpacity>
        );

        if (this.state.placesLoaded){
            content = (
                <PlaceList places={this.props.places} onItemSelected={this.onItemSelectedHandler}/>
            );
        }

        return (
            <View style={this.state.placesLoaded ? null : styles.buttonContainer}>
                {content}
            </View>
        );
    }
}

const mapStateToProps = state =>{
  return {
      places: state.places.places
  };
};

const styles = StyleSheet.create({
    buttonContainer:{
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    searchButton : {
        borderColor:"orange",
        borderWidth:3,
        borderRadius :50,
        padding: 20
    },
    searchButtonText:{
        color:"orange",
        fontWeight:"bold",
        fontSize:26
    }

});

export default connect(mapStateToProps)(FindPlaceScreen);