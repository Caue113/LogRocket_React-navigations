import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

const Home = ({navigation}) =>{
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Button title="Go to About"
        onPress ={() => navigation.navigate("About")}
      />

      <Button title="See our Contacts"
        onPress ={() => navigation.navigate("Contact")}
      />

      <Button title="Check the Details"
        onPress ={() => navigation.navigate("Details")}
      />
    </View>
  );
}

export default Home;