import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, TextInput, Text, TouchableOpacity, Image} from 'react-native';

import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

const Jeep2Go = () => {
  return (
    <ScrollView style={{margin: 30}}>
    {/* Logo here */}
    <View>
      <Text style={{}}>Welcome</Text>
    </View>
    {/* start of the code when signing up */}
      <View>
        <Text>Sign In</Text>
          <Text>with your Email or Phone</Text>
            <TextInput 
            placeholder="Email or Phone" style={{borderWidth:1}}/>
        <Text>Forgot Email?</Text>
      </View>
      <View>
        <Text>Create Account</Text>
        <TouchableOpacity
        onPress>Next</TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Jeep2Go;