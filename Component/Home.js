import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          width: 90,
          height: 40,
          borderRadius: 10,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <Text style={{color: '#FFF', fontWeight: '700', fontSize: 14}}>
          Go To Details
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
