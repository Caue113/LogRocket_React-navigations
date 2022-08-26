import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

const ContactScreen = () =>{
  return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{color: "#9a9aff", fontSize: 30}}>
            See the contacts below
          </Text>
        </View>
  );
}

export default ContactScreen;