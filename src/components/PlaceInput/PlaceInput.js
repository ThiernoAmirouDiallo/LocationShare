import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import DefaultInput from '../UI/DefaultInput/DefaultInput'
class PlaceInput extends Component {


  render() {
    return (
          <DefaultInput placeholder="Place Name"
          value={this.props.placeName}
          onChangeText={this.props.onChangeText }/>
    );
  }
}


export default PlaceInput;
