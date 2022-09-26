import {
  View,
  Text,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Async = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameFetch, setnameFetch] = useState('');
  const [emailFetch, setemailFetch] = useState('');
  const saveData = () => {
    AsyncStorage.setItem('name', name);
    AsyncStorage.setItem('email', email);
    alert('data saved');
  };

  const getData = () => {
    AsyncStorage.getItem('name').then(value => {
      setnameFetch(value);
    });

    AsyncStorage.getItem('email').then(value => {
      setemailFetch(value);
    });
  };

  return (
    <View
      style={{marginTop: 50, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '100%', backgroundColor: 'red'}}>
        <TextInput
          style={{backgroundColor: 'black', color: 'white'}}
          placeholder="Name"
          onChangeText={value => setName(value)}
          value={name}
        />
      </View>
      <View style={{width: '100%', backgroundColor: 'red', marginTop: 30}}>
        <TextInput
          style={{backgroundColor: 'black', color: 'white'}}
          placeholder="email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          saveData();
        }}
        style={{backgroundColor: 'red', marginTop: 50}}>
        <Text>Save Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          getData();
        }}
        style={{backgroundColor: 'green', marginTop: 20}}>
        <Text>get data</Text>
      </TouchableOpacity>

      <Text>{nameFetch}</Text>
      <Text>{emailFetch}</Text>
    </View>
  );
};
export default Async;
