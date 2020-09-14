import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
function chatComponent() {
  return (
    <>
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
              placeholder="Search"
              style={{
                height: '100%',
                width: '70%',
                position: 'absolute',
                marginLeft: 40,
              }}
            />
          </View>
        </View>
        <ScrollView style={{marginTop: 30, height: 400}}>
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
                PT Smart Wolf
              </Text>

              <Text
                style={{
                  marginLeft: 9,

                  fontSize: 15,
                  color: 'grey',
                }}>
                Lorem ipsun
              </Text>
            </View>
          </TouchableOpacity>

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
                PT Smart Wolf
              </Text>

              <Text
                style={{
                  marginLeft: 9,

                  fontSize: 15,
                  color: 'grey',
                }}>
                Lorem ipsun
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
}

export default chatComponent;
