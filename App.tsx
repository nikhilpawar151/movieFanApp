/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AppScreen } from './utils/app-constant';
import { DashboardScreen } from './src/views/screens';


function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator()
  
  return (
    <SafeAreaView style={{flex : 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={AppScreen.DASHBOARD}
          screenOptions={{headerShown : false}}>
          <Stack.Screen name={AppScreen.DASHBOARD} component={DashboardScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


export default App;
