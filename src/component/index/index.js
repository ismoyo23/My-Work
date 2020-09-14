import React from 'react';
import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';
import image from '../../main/img/programer.jpg';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

function Index() {
  let navigation = useNavigation();
  return (
    <>
      <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
        <View style={styles.colorBg}></View>
        <View style={styles.Container}>
          <Text style={{color: 'white', fontWeight: 'bold', marginTop: 34}}>
            My Work
          </Text>
          <Text style={styles.Title}>
            Temukan developer berbakat & Terbaik dari berbagai bidang keahlian
          </Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('login', {role: `1`})
            }
            style={styles.buttonWorkers}>
            <Text
              style={{
                color: '#5E50A1',
                fontSize: 16,
                fontWeight: 'bold',
                lineHeight: 20,
                textAlign: 'center',
                top: 13,
              }}>
              Masuk sebagai pekerja
            </Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', top: 11}}>
            <View
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                width: '40%',
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                marginLeft: 13,
                marginTop: 2,
              }}>
              Atau
            </Text>
            <View
              style={{
                marginLeft: 'auto',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                width: '40%',
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('login', {role: `2`})
            }
            style={styles.buttonRecruiter}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
                lineHeight: 20,
                textAlign: 'center',
                top: 13,
              }}>
              Masuk sebagai perekrut
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}

export default Index;
