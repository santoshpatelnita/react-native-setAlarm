import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

const TestScreen = () => {
  const [isOn, setIson] = useState(false);
  const renderHeaderContainer = () => {
    return (
      <>
        <View
          style={{
            width: '90%',
            height: 18,
            backgroundColor: '#424242',
            borderRadius: 8,
            alignSelf: 'center',
            shadowOffset: { width: -10, height: 14 },
            shadowColor: 'red',
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        />
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#ef8324',
                  fontSize: 18,
                  fontWeight: '600',
                  marginLeft: 9,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '800' }}>
              Change Wake Up
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#ef8324',
                  fontSize: 18,
                  fontWeight: '700',
                  marginRight: 10,
                }}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
          {renderClockContainer()}
        </View>
      </>
    );
  };

  const renderClockContainer = () => {
    const value = 0.66;
    return (
      <View
        style={{
          backgroundColor: '#2e2b29',
          width: '100%',
          height: '92%',
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 30,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../Assets/bedTime.png')}
              style={{ width: 30, height: 30, tintColor: '#FFF' }}
            />
            <View style={{ alignSelf: 'center', marginLeft: 10 }}>
              <Text style={{ color: '#FFF', fontWeight: '400', fontSize: 14 }}>
                BEDTIME
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../Assets/notification.png')}
              style={{ width: 24, height: 24, tintColor: '#FFF', marginTop: 4 }}
            />
            <View
              style={{
                alignSelf: 'center',
                marginLeft: 5,
                alignSelf: 'center',
              }}>
              <Text style={{ color: '#FFF', fontWeight: '500', fontSize: 14 }}>
                WAKE UP
              </Text>
            </View>
          </View>
        </View>
        {/*-- time view --*/}
        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
          <Text style={{ color: '#FFF', fontSize: 30, fontWeight: '800' }}>
            3:15 AM
          </Text>
          <Text style={{ color: '#FFF', fontSize: 30, fontWeight: '800' }}>
            8:20 AM
          </Text>
        </View>
        {/* -- day View -- */}
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 5,
          }}>
          <Text style={{ color: '#FFF', fontSize: 15, fontWeight: '400' }}>
            Tomorrow
          </Text>
          <Text style={{ color: '#FFF', fontSize: 15, fontWeight: '400' }}>
            Tomorrow
          </Text>
        </View>
        {/* --circle bar-- */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image source={require('../Assets/clock.png')} />
        </View>
        {/* ---time--- */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF' }}>7 hr 15 min</Text>
          <Text style={{ color: '#FFFFFF' }}>
            © This schedule does not meet your sleep goal.
          </Text>
        </View>
      </View>
    );
  };

  const renderSleepButton = () => {
    return (
      <View style={styles.editButton}>
        <Text style={{ color: '#e68a00', fontSize: 18, fontWeight: '500' }}>
          Edit Sleep Schedule in Health
        </Text>
      </View>
    );
  };

  const renderAleramOption = () => {
    return (
      <>
        <View style={{ marginTop: 20, marginLeft: 15 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 23, color: '#FFFFFF' }}>
            Alarm Options
          </Text>
        </View>
        <View
          style={{
            width: '95%',
            height: 40,
            backgroundColor: '#424242',
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 19,
              fontWeight: '600',
              alignSelf: 'center',
              marginLeft: 10,
            }}>
            Wake Up Alarm
          </Text>
          {isOn == true ? (
            <TouchableOpacity
              style={{ marginRight: 10, alignSelf: 'center' }}
              onPress={() => {
                setIson(!isOn);
              }}>
              <Image
                style={{ tintColor: 'green' }}
                source={require('../Assets/toggalOnmain.png')}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{ marginRight: 10, alignSelf: 'center' }}
              onPress={() => {
                setIson(!isOn);
              }}>
              <Image
                style={{ alignSelf: 'center' }}
                source={require('../Assets/toggalOff.png')}
              />
            </TouchableOpacity>
          )}
        </View>
      </>
    );
  };
  const renderAnotherView = () => {
    return (
      <View
        style={{
          width: '95%',
          height: 40,
          backgroundColor: '#424242',
          alignSelf: 'center',
          borderRadius: 10,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 19,
            fontWeight: '600',
            alignSelf: 'center',
            marginLeft: 10,
          }}>
          Sounds & Haptics
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: '#FFF' }}>Early Riser</Text>
          <Image
            source={require('../Assets/forwordIcon.png')}
            style={{ tintColor: '#FFF' }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: '#1b1818', flex: 1 }}>
      {renderHeaderContainer()}
      {renderSleepButton()}
      {renderAleramOption()}
      {renderAnotherView()}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
    backgroundColor: '#424242',
    alignSelf: 'center',
    borderRadius: 8,
    zIndex: 999,
    marginTop: -10,
  },
  editButton: {
    width: '95%',
    height: 50,
    backgroundColor: '#424242',
    marginTop: 40,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TestScreen;
