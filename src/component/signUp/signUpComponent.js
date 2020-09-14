import React, {useState} from 'react';
import styles from './styles1';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {register} from '../../redux/actions/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import {BASE_URL} from '@env';
import {useNavigation} from '@react-navigation/native';

function signUp(props) {
  let navigation = useNavigation();

  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [address, setAddress] = useState('');
  let [phone, setPhone] = useState('');
  let [company, setCompany] = useState('');
  let [role, setRole] = useState('1');
  let [isLoading, setIsLoading] = useState(false);

  let Register = () => {
    let data = {
      url: BASE_URL,
      username: username,
      password: password,
      email: email,
      address: address,
      phone: phone,
      company: company,
      role: role,
    };
    props.register(data).then(() => {
      setIsLoading(true);
      setTimeout(() => {
        setUsername('');
        setPassword('');
        setEmail('');
        setPhone('');
        setAddress('');
        setIsLoading(false);
        Alert.alert(
          'Success',
          'Register Success',
          [{text: 'OK', onPress: () => navigation.navigate('login')}],
          {cancelable: false},
        );
      }, 2000);
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
              Register
            </Text>
            <Text style={styles.textTitle}>Daftarkan akun anda</Text>

            <View style={{marginTop: 40}}>
              <Text style={{color: '#9EA0A5'}}>Nama Panjang</Text>
              <TextInput
                onChangeText={(text) => setUsername(text)}
                value={username}
                style={styles.formInput}
                placeholder="Masukkan Nama Panjang"
              />

              <Text style={{color: '#9EA0A5', marginTop: 30}}>Email</Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                style={styles.formInput}
                placeholder="Masukkan Email"
              />

              <Text style={{color: '#9EA0A5', marginTop: 30}}>Kata Sandi</Text>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                style={styles.formInput}
                placeholder="Masukkan Password"
              />

              <Text style={{color: '#9EA0A5', marginTop: 30}}>
                No handphone
              </Text>
              <TextInput
                onChangeText={(text) => setPhone(text)}
                value={phone}
                style={styles.formInput}
                placeholder="Masukkan No handphone"
              />
              <Text style={{color: '#9EA0A5', marginTop: 30}}>Perusahaan</Text>
              <TextInput
                onChangeText={(text) => setCompany(text)}
                value={company}
                style={styles.formInput}
                placeholder="Masukkan Perusahaan"
              />

              <Text style={{color: '#9EA0A5', marginTop: 30}}>Jabatan</Text>
              <TextInput
                onChangeText={(text) => setAddress(text)}
                value={address}
                style={styles.formInput}
                placeholder="Masukkan Jabatan"
              />

              <Text style={{color: '#9EA0A5', marginTop: 30}}>
                Konformasi kata sandi
              </Text>
              <TextInput
                style={styles.formInput}
                placeholder="Masukkan Password"
              />

              <TouchableOpacity
                onPress={Register}
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
                  Register
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: 30,
                  }}>
                  <Text style={{marginTop: 8, color: '#1F2A36'}}>
                    Sudah punya akun ?
                  </Text>

                  <Text style={{marginTop: 8, color: 'orange', marginLeft: 6}}>
                    Masuk disini
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
  resRegister: state.register,
});
const mapDispatchToProp = {register};

export default connect(mapStateToProps, mapDispatchToProp)(signUp);
