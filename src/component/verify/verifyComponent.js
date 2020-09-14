import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
function resetComponent() {
  let navigation = useNavigation();
  return (
    <>
      <ScrollView style={{height: 500}}>
        <View style={styles.Container}>
          <Text style={{top: 40, fontSize: 20, color: '#5E50A1'}}>My Work</Text>

          <View style={styles.body}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                lineHeight: 44,
                color: '#46505C',
              }}>
              Verify Code
            </Text>
            <Text style={styles.textTitle}>
              enter the verification code sent to the email
            </Text>

            <View style={{marginTop: 40}}>
              <Text style={{color: '#9EA0A5'}}>Code</Text>
              <TextInput style={styles.formInput} placeholder="Input Code" />

              <TouchableOpacity
                onPress={() => navigation.navigate('changepassword')}
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
                  Verify
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default resetComponent;
