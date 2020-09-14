import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {login} from '../../redux/actions/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import {BASE_URL} from '@env';

function loginComponent(props) {
  let navigation = useNavigation();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [isLoading, setIsLoading] = useState(false);

  let Login = () => {
    let data = {
      url: BASE_URL,
      email: email,
      password: password,
    };
    props.login(data).then(() => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setEmail('');
        setPassword('');

        Alert.alert(
          'Success',
          'Login Success',
          [{text: 'OK', onPress: () => navigation.navigate('homepage')}],
          {cancelable: false},
        );
      }, 2000);
    }).catch((error) => {
      Alert.alert(
        'Opps',
        'user belum terdaftar',
        [{text: 'OK', onPress: () => navigation.navigate('login')}],
        {cancelable: false},
      );
    });
  };
  return (
    <>
      <Spinner visible={isLoading} />
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
              Login
            </Text>
            <Text style={styles.textTitle}>Login terlebih dahulu</Text>

            <View style={{marginTop: 40}}>
              <Text style={{color: '#9EA0A5'}}>Email</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Masukkan Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />

              <Text style={{color: '#9EA0A5', marginTop: 30}}>Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.formInput}
                placeholder="Masukkan Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
              />

              <TouchableOpacity onPress={() => navigation.navigate('reset')}>
                <Text
                  style={{textAlign: 'right', marginTop: 8, color: '#1F2A36'}}>
                  Lupa kata sandi ?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={Login} style={styles.buttonRecruiter}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold',
                    lineHeight: 20,
                    textAlign: 'center',
                    top: 13,
                  }}>
                  Login
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() =>
              navigation.navigate('register')
            }>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text style={{marginTop: 8, color: '#1F2A36'}}>
                    Anda belum punya akun ?
                  </Text>

                  <Text style={{marginTop: 8, color: 'orange', marginLeft: 6}}>
                    Daftar disini
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const mapStateToProps = (state) => ({
  resLogin: state.auth,
});
const mapDispatchToProp = {login};

export default connect(mapStateToProps, mapDispatchToProp)(loginComponent);
