import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Portofolio from '../portofolio/portofolioComponent';
import Experience from '../experience/experienceComponent';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../redux/actions/auth';
import {connect} from 'react-redux';
import {homeGet} from '../../redux/actions/home';
import {BASE_URL} from '@env';
const Tab = createMaterialTopTabNavigator();
function searchComponent(props) {
  let navigation = useNavigation();
  let [sortmodalVisible, setSortModalVisible] = useState(false);
  let [modalVisible, setModalVisible] = useState(false);
  let [search, setSearch] = useState('');
  let [sorting, setSorting] = useState('username');
  let [offset, setOffset] = useState(1);

  let [detail, setDetail] = useState([]);
  let [skill, setSkill] = useState([]);

  React.useEffect(() => {
    const reloadPage = navigation.addListener('focus', () => {});
    searchFunction();
    return reloadPage;
  }, [navigation]);
  let searchFunction = (sort) => {
    let variable = sorting == 'username' ? 'undefined' : sorting;

    let check = variable == undefined ? '' : `&colums=${sorting}`;
    let data = {
      ConUrl: BASE_URL,
      search: `?field=username&search=${search}&page=${offset}`,
      sort: check,
    };

    let headers = {
      'Content-Type': 'application/json',
      Authorization: props.auth.data.AccessToken,
    };

    props.homeGet(data, headers);
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

  let paginationFunction = () => {
    setOffset(offset + 1);
    searchFunction();
  };
  return (
    <>
      {/* modal profile */}
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

              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    marginTop: 12,
                    textAlign: 'center',
                  }}>
                  M Ismoyo Setyonowidagdo
                </Text>
                <Text style={{color: 'grey', textAlign: 'center'}}>
                  Web Developer
                </Text>

                <Text style={{color: 'grey', marginTop: 12}}>
                  Find avatar stock images in HD and millions of other
                  royalty-free stock photos, illustrations and vectors in the
                  Shutterstock collection. Thousands of new. Find avatar stock
                  images in HD and millions of other royalty-free stock photos,
                  illustrations and vectors in the Shutterstock collection.
                  Thousands of new.Find avatar stock images in HD and millions
                  of other royalty-free stock photos, illustrations and vectors
                  in the Shutterstock collection. Thousands of new Find avatar
                  stock images in HD and millions of other royalty-free stock
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
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>Skill</Text>

                  {/* body */}
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 8,
                      flexWrap: 'wrap',
                    }}>
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
                    <Tab.Screen name="Job Experience" component={Experience} />
                  </Tab.Navigator>
                </View>
              </View>

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
      {/* modal sort*/}
      <Modal
        animationType="slide"
        transparent={true}
        visible={sortmodalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <TouchableOpacity
                onPress={() => searchFunction('username')}
                style={styles.modalText}>
                <Text style={styles.textShor}>Sortir berdasarkan nama</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => searchFunction('address')}
                style={styles.modalText}>
                <Text style={styles.textShor}>Sortir berdasarkan Jabatan</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableHighlight
                style={{
                  marginTop: 200,
                  ...styles.openButton,
                  backgroundColor: '#2196F3',
                }}
                onPress={() => {
                  setSortModalVisible(!sortmodalVisible);
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

      {/* ============================================== */}
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.body}>
            <Icon
              style={{
                marginTop: 15,
                marginLeft: 11,
              }}
              name="search"
              size={30}
              color="grey"
            />
            <TextInput
              onSubmitEditing={searchFunction}
              onChangeText={(text) => setSearch(text)}
              value={search}
              placeholder="Search"
              style={{
                height: '100%',
                width: '70%',
                position: 'absolute',
                marginLeft: 40,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setSortModalVisible(true);
            }}
            style={styles.box}>
            <Icon
              style={{
                marginTop: 15,
                marginLeft: 11,
              }}
              name="list"
              size={30}
              color="grey"
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          onScroll={paginationFunction}
          style={{marginTop: 30, height: 400}}>
          {props.getHome.data.map((data) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
                style={styles.card}>
                <Image
                  source={require('../../main/img/avatar.png')}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    marginTop: 12,
                    marginLeft: 12,
                  }}
                />
                <View>
                  <Text
                    style={{
                      marginLeft: 9,
                      marginTop: 8,
                      fontWeight: 'bold',
                      fontSize: 17,
                    }}>
                    {data.username}
                  </Text>

                  <Text
                    style={{
                      marginLeft: 9,

                      fontSize: 15,
                      color: 'grey',
                    }}>
                    {data.address}
                  </Text>

                  <View style={{flexDirection: 'row'}}>
                    {skill.map((skill) => {
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
    </>
  );
}

const mapStateToProps = (state) => ({
  getHome: state.homeGet,
  auth: state.auth,
});
const mapDispatchToProp = {homeGet, login};

export default connect(mapStateToProps, mapDispatchToProp)(searchComponent);
