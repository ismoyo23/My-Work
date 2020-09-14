import React, {useEffect} from 'react';
import styles from './styles1';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../redux/actions/auth';
import {connect} from 'react-redux';
import {homeGet} from '../../redux/actions/home';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import changePortofolio from '../../screen/changePortofolio/';
import changeExperience from '../../component/changeExperience/changeExperienceCompoent';
import {getSkill} from '../../redux/actions/skills';
const Tab = createMaterialTopTabNavigator();
function updateProfileComponent(props) {
  let navigation = useNavigation();

  useEffect(() => {
    skillFunction();
  }, []);

  let skillFunction = () => {
    let search = `?field=id_user&search=${props.auth.data.id}`;
    let url = BASE_URL;
    let headers = {
      'Content-Type': 'application/json',
      Authorization: props.auth.data.AccessToken,
    };
    props.getSkill(search, url, headers);
  };

  return (
    <>
      <ScrollView style={{height: 500, backgroundColor: 'white'}}>
        <View
          style={{
            marginTop: 12,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../main/img/avatar.png')}
            style={{width: 100, height: 100, borderRadius: 90}}
          />

          <Text style={{fontWeight: 'bold', marginTop: 12, fontSize: 20}}>
            {props.auth.data.username}
          </Text>

          <Text style={{fontSize: 16, color: 'gray'}}>
            {props.auth.data.adress}
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('updateprofile')}
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
              Update Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.buttonCancel}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
                lineHeight: 20,
                textAlign: 'center',
                top: 13,
              }}>
              Batal
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Container}>
          <View style={styles.body}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                lineHeight: 44,
                color: '#46505C',
              }}>
              Data Diri
            </Text>

            <View style={{marginTop: 40}}>
              <Text style={{color: '#9EA0A5'}}>Nama Panjang</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Masukkan Nama Panjang"
              />

              <Text style={{color: '#9EA0A5', marginTop: 30}}>Email</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Masukkan Email"
              />

              <Text style={{color: '#9EA0A5', marginTop: 30}}>
                No handphone
              </Text>
              <TextInput
                style={styles.formInput}
                placeholder="Masukkan No handphone"
              />
              <Text style={{color: '#9EA0A5', marginTop: 30}}>Perusahaan</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Masukkan Perusahaan"
              />

              <Text style={{color: '#9EA0A5', marginTop: 30}}>Jabatan</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Masukkan Jabatan"
              />

              <Text style={{color: '#9EA0A5', marginTop: 30}}>Kata Sandi</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Masukkan Password"
              />
            </View>
          </View>
          <Text style={{marginTop: 30, fontWeight: 'bold', fontSize: 30}}>
            Skill
          </Text>
          <View style={{marginTop: 12, flexDirection: 'row'}}>
            <TextInput
              placeholder="input Skill"
              style={{
                width: '70%',
                height: 50,
                borderWidth: 3,
                borderColor: 'orange',
                borderRadius: 10,
              }}
            />

            <View
              style={{
                backgroundColor: 'orange',
                width: 100,
                height: 50,
                borderRadius: 10,
                marginLeft: 12,
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
          </View>

          <View
            style={{
              marginTop: 30,
              marginBottom: 30,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <View style={styles.badge}>
              <Text style={{textAlign: 'center', marginTop: 5, color: 'white'}}>
                Javascript
              </Text>
            </View>

            <View style={styles.badge}>
              <Text style={{textAlign: 'center', marginTop: 5, color: 'white'}}>
                Javascript
              </Text>
            </View>

            <View style={styles.badge}>
              <Text style={{textAlign: 'center', marginTop: 5, color: 'white'}}>
                Javascript
              </Text>
            </View>

            <View style={styles.badge}>
              <Text style={{textAlign: 'center', marginTop: 5, color: 'white'}}>
                Javascript
              </Text>
            </View>
          </View>

          <Tab.Navigator>
            <Tab.Screen name="Portofolio" component={changePortofolio} />
            <Tab.Screen name="Job Experience" component={changeExperience} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  skillGet: state.getSkill,
});
const mapDispatchToProp = {login, getSkill};

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(updateProfileComponent);
