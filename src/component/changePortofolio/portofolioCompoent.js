import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';
function portofolioComponent() {
  return (
    <>
      <View style={{marginTop: 12, backgroundColor: 'white'}}>
        <View
          style={{
            marginTop: 90,
            marginBottom: 90,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 300, width: '100%'}}
            source={require('../../main/img/uploadImage.png')}
          />
        </View>
        <View
          style={{
            backgroundColor: 'orange',
            width: '100%',
            height: 50,
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 11,
              color: 'white',
              fontSize: 20,
            }}>
            Tambah
          </Text>
        </View>

        <View style={{height: '100%', backgroundColor: 'white'}}>
          <View style={{marginTop: 19}}>
            <View style={styles.badge}>
              <Text style={{textAlign: 'center', marginTop: 5, color: 'white'}}>
                Delete
              </Text>
            </View>
            <Image
              source={require('../../main/img/designTugas.jpeg')}
              style={{width: '100%', height: 170}}
            />
          </View>

          <View style={{marginTop: 19}}>
            <View style={styles.badge}>
              <Text style={{textAlign: 'center', marginTop: 5, color: 'white'}}>
                Delete
              </Text>
            </View>
            <Image
              source={require('../../main/img/tamplateBagus.jpg')}
              style={{width: '100%', height: 170}}
            />
          </View>
        </View>
      </View>
    </>
  );
}

export default portofolioComponent;
