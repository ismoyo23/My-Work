import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Alert,
} from 'react-native';
import image from '../../main/img/bgimage.jpg';
import styles from './style';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Portofolio from '../portofolio/portofolioComponent';
import Experience from '../experience/experienceComponent';
import {login} from '../../redux/actions/auth';
import {logout} from '../../redux/actions/auth';
import {connect} from 'react-redux';
import {homeGet} from '../../redux/actions/home';
import {showHome} from '../../redux/actions/home';
import {getSkill} from '../../redux/actions/skills';
import {BASE_URL} from '@env';
import axios from 'axios';

const Tab = createMaterialTopTabNavigator();
function Home(props) {
  let navigation = useNavigation();
  let [detail, setDetail] = useState([]);
  let [skill, setSkill] = useState([]);

  React.useEffect(() => {
    const reloadPage = navigation.addListener('focus', () => {
      homeFunction();
      skillFunction();
    });

    return reloadPage;
  }, [navigation]);

  let homeFunction = () => {
    let data = {
      ConUrl: BASE_URL,
      search: '',
      sort: '',
    };

    let headers = {
      'Content-Type': 'application/json',
      Authorization: props.auth.data.AccessToken,
    };

    props.homeGet(data, headers);
  };

  let skillFunction = () => {
    let search = `?field=id_user&search=${props.auth.data.id}`;
    let url = BASE_URL;
    let headers = {
      'Content-Type': 'application/json',
      Authorization: props.auth.data.AccessToken,
    };
    props.getSkill(search, url, headers);
  };

  let detailFunction = (id) => {
    let search = `?field=id&search=${id}`;
    let url = BASE_URL;
    let headers = {
      'Content-Type': 'application/json',
      Authorization: props.auth.data.AccessToken,
    };

    axios({
      method: 'GET',
      url: `${url}auth/user${search}`,
      headers: headers,
    }).then((response) => {
      setDetail(response.data.data);
      setModalVisible(true);
      skillDetailFunction(response.data.data[0].id);
    });
  };

  let LogoutProcess = () => {
    Alert.alert(
      'Warning',
      'Do you will leave this page',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            props.logout(), navigation.navigate('login');
          },
        },
      ],
      {cancelable: false},
    );
  };

  let skillDetailFunction = (id) => {
    let search = `?field=id_user&search=${id}`;
    let url = BASE_URL;
    let headers = {
      'Content-Type': 'application/json',
      Authorization: props.auth.data.AccessToken,
    };
    axios({
      method: 'GET',
      url: `${url}skill${search}`,
      headers: headers,
    }).then((response) => {
      setSkill(response.data.data);
    });
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView style={{height: 10, width: '100%'}}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../main/img/avatar.png')}
                  style={{width: 100, height: 100}}
                />
              </View>
              {detail.map((detail) => {
                return (
                  <View>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginTop: 12,
                        textAlign: 'center',
                      }}>
                      {detail.username}
                    </Text>
                    <Text style={{color: 'grey', textAlign: 'center'}}>
                      {detail.address}
                    </Text>

                    <Text style={{color: 'grey', marginTop: 12}}>
                      Find avatar stock images in HD and millions of other
                      royalty-free stock photos, illustrations and vectors in
                      the Shutterstock collection. Thousands of new. Find avatar
                      stock images in HD and millions of other royalty-free
                      stock photos, illustrations and vectors in the
                      Shutterstock collection. Thousands of new.Find avatar
                      stock images in HD and millions of other royalty-free
                      stock photos, illustrations and vectors in the
                      Shutterstock collection. Thousands of new Find avatar
                      stock images in HD and millions of other royalty-free
                      stock
                    </Text>

                    <View
                      style={{
                        backgroundColor: '#5E50A1',
                        height: 45,
                        borderRadius: 20,
                        marginTop: 12,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          marginTop: 9,
                          color: 'white',
                          fontSize: 20,
                        }}>
                        Hire
                      </Text>
                    </View>

                    {/* skills */}
                    <View style={styles.skill}>
                      <Text style={{fontWeight: 'bold', fontSize: 20}}>
                        Skill
                      </Text>

                      {/* body */}
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 8,
                          flexWrap: 'wrap',
                        }}>
                        {/* card */}

                        {skill.map((skill) => {
                          return (
                            <View
                              style={{
                                marginTop: 8,
                                backgroundColor: 'orange',
                                width: 120,
                                height: 30,
                                borderRadius: 12,
                                marginLeft: 2,
                              }}>
                              <Text
                                style={{
                                  textAlign: 'center',
                                  marginTop: 5,
                                  color: 'white',
                                }}>
                                {skill.name_skill}
                              </Text>
                            </View>
                          );
                        })}
                      </View>
                      <Tab.Navigator>
                        <Tab.Screen name="Portofolio" component={Portofolio} />
                        <Tab.Screen
                          name="Job Experience"
                          component={Experience}
                        />
                      </Tab.Navigator>
                    </View>
                  </View>
                );
              })}
              <TouchableHighlight
                style={{...styles.openButton, backgroundColor: '#2196F3'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableHighlight>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <View>
        <ImageBackground
          style={{width: '100%', height: 140}}
          imageStyle={{borderBottomRightRadius: 40}}
          source={image}>
          <View style={styles.Container}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginTop: 50, color: 'white', fontSize: 16}}>
                {moment(new Date()).format('LL')}
              </Text>
              <View
                style={{
                  marginLeft: 'auto',
                  direction: 'row',
                }}>
                <Icon
                  style={{
                    position: 'absolute',
                    marginTop: 40,
                    marginLeft: -39,
                  }}
                  name="bell"
                  color="white"
                  size={26}
                />
                <TouchableOpacity onPress={LogoutProcess}>
                  <Icon
                    style={{
                      marginTop: 40,
                    }}
                    name="sign-out"
                    color="white"
                    size={26}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.title}>Hai, {props.auth.data.username}</Text>
          </View>
        </ImageBackground>

        <View style={styles.Container}>
          <Text style={{marginTop: 30, fontSize: 16}}>Web Developer</Text>

          <ScrollView style={styles.Body}>
            {/* card */}

            {props.getHome.data.map((home) => {
              return (
                <TouchableOpacity
                  onPress={() => detailFunction(home.id)}
                  style={styles.card}>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../../main/img/avatar.png')}
                  />
                  <View style={{marginTop: 9, marginLeft: 9}}>
                    <Text style={{fontWeight: 'bold'}}>{home.username}</Text>
                    <Text style={{color: '#9EA0A5'}}>Web Developer</Text>
                    {/* list skill */}

                    <View style={{flexDirection: 'row'}}>
                      {props.skillGet.data.map((skill) => {
                        return (
                          <View style={styles.badge}>
                            <Text style={styles.textBadge}>
                              {skill.name_skill}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  getHome: state.homeGet,
  skillGet: state.getSkill,
  homeShow: state.showHome,
});
const mapDispatchToProp = {login, homeGet, getSkill, showHome, logout};

export default connect(mapStateToProps, mapDispatchToProp)(Home);
