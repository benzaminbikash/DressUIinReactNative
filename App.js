/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image, TouchableOpacity} from 'react-native';
import ContentScreen from './src/screen/ContentScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: null,
          headerShadowVisible: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <MaterialIcon name="sort" size={35} color="black" />
            ),
            headerRight: () => (
              <Image
                source={{
                  uri: 'https://www.theknot.com/tk-media/images/a736ddc7-765f-439f-856b-e0d3d7fdb2d6~rs_768.h',
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  alignItems: 'center',
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          options={({navigation}) => ({
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back-outline" size={35} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity activeOpacity={0.7}>
                <Ionicons
                  name="ellipsis-vertical-outline"
                  size={35}
                  color="black"
                />
              </TouchableOpacity>
            ),
          })}
          name="ContentScreen"
          component={ContentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
