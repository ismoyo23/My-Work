import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Portofolio from '../portofolio/portofolioComponent';
import Experience from '../experience/experienceComponent';
import styles from './styles';
import {login} from '../../redux/actions/auth';
import {connect} from 'react-redux';
import {BASE_URL} from '@env';
import axios from 'axios';
const Tab = createMaterialTopTabNavigator();
function myProfileComponent(props) {
  let navigation = useNavigation();
  let [detail, setDetail] = useState([]);
  let [skill, setSkill] = useState([]);
  useEffect(() => {
    let search = `?field=id_user&search=${props.auth.data.id}`;
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
  }, []);

  return (
    <>
      <View style={{marginLeft: 14, marginRight: 14, height: '100%'}}>
        <ScrollView style={{height: 10, width: '100%'}}>
          <View
            style={{
              marginTop: 12,
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
              {props.auth.data.username}
            </Text>
            <Text style={{color: 'grey', textAlign: 'center'}}>
              {props.auth.data.address}
            </Text>

            <Text style={{color: 'grey', marginTop: 12}}>
              Find avatar stock images in HD and millions of other royalty-free
              stock photos, illustrations and vectors in the Shutterstock
              collection. Thousands of new. Find avatar stock images in HD and
              millions of other royalty-free stock photos, illustrations and
              vectors in the Shutterstock collection. Thousands of new.Find
              avatar stock images in HD and millions of other royalty-free stock
              photos, illustrations and vectors in the Shutterstock collection.
              Thousands of new Find avatar stock images in HD and millions of
              other royalty-free stock
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('login')}
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
                Update Profile
              </Text>
            </TouchableOpacity>

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
              <View style={{marginTop: 20}}>
                <Tab.Navigator>
                  <Tab.Screen name="Portofolio" component={Portofolio} />
                  <Tab.Screen name="Job Experience" component={Experience} />
                </Tab.Navigator>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProp = {login};

export default connect(mapStateToProps, mapDispatchToProp)(myProfileComponent);
