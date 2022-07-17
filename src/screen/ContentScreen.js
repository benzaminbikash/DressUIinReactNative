/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ContentScreen = ({route}) => {
  const {data} = route.params;
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{marginTop: 40, flex: 1}}>
        <Text
          style={{
            paddingHorizontal: 20,
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
          }}>
          {data.title}
        </Text>
        <ImageBackground
          style={{
            height: 380,
            paddingTop: 40,
            // paddingHorizontal: 20,
            overflow: 'hidden',
            resizeMode: 'contain',
          }}
          source={data.image}
        />
      </View>
      <View
        style={{
          backgroundColor: '#ff00ff',
          flex: 1,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Price ${data.price}
          </Text>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Rating {data.rating.rate}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              textAlign: 'justify',
              marginVertical: 10,
            }}>
            {data.description}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="cart" size={25} color="red" />
          <View
            style={{
              flex: 1,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 30,
              borderRadius: 10,
              padding: 10,
            }}>
            <TouchableOpacity>
              <Text style={{color: 'white', fontSize: 20}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContentScreen;
