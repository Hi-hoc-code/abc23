import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import ThanhToan from './src/screen/ThanhToan';
import ThanhCong from './src/screen/ThanhCong';
import RegisterScreens from './src2/screen/RegisterScreens';
import HomeScreesn from './src2/screen/HomeScreesn';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name='pay' component={ThanhToan} />
        <Stack.Screen name='done' component={ThanhCong} /> */}
        <Stack.Screen name='RegisterScreen' component={RegisterScreens} />
        <Stack.Screen name='HomeScreens' component={HomeScreesn} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})