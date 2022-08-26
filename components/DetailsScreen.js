import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


const Details = ({navigation}) =>{
  return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{color: "#0092ad"}}>
            Details Page!
          </Text>

          <Button title="Go to Details... again"
            onPress ={() => navigation.push("Details")}
          />

          <Button title="Go Back Once"
            onPress ={() => navigation.goBack()}
          />

          <Button title="Go To menu"
            onPress ={() => navigation.navigate("Home")}
          />

        </View>
  );
}

export default Details;