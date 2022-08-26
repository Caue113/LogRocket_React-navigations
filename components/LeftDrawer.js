import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

const LeftDrawer = ({navigation}) =>{
  return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Left Drawer</Text>
        </View>
  );
}

export default LeftDrawer;