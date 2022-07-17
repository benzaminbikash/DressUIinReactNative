/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import dresses from '../database/Clothes';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  const AllDresses = ({allitem}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigation.navigate('ContentScreen', {data: allitem})}>
        <ImageBackground
          style={{
            width: windowWidth / 2 - 30,
            height: windowHeight / 4,
            marginVertical: 10,
            marginHorizontal: 5,
            overflow: 'hidden',
            paddingTop: 25,
            paddingBottom: 20,
            // marginBottom: 0,
          }}
          source={allitem.image}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, backgroundColor: 'white', flex: 1}}>
      <View>
        <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>
          Dress
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'gray',
            fontSize: 15,
            marginVertical: 5,
          }}>
          You can find any kind of dress.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          marginTop: 10,
          borderColor: 'silver',
          paddingHorizontal: 10,
          borderRadius: 10,
        }}>
        <MaterialIcon size={25} name="search" style={{marginRight: 5}} />
        <TextInput placeholder="Search Dress" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Man
        </Text>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Woman
        </Text>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Children
        </Text>
        <Text style={{color: 'blue', fontSize: 20, fontWeight: 'bold'}}>
          See All
        </Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={dresses}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <AllDresses allitem={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
