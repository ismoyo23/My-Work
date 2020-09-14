import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Search from '../screen/search';
import Home from '../screen/home';
import Chat from '../screen/chat';
import myProfile from '../screen/myProfile';
import {logout} from '../redux/actions/auth';
import {connect} from 'react-redux';
const Tab = createMaterialBottomTabNavigator();

function Bottom() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#5E50A1"
      inactiveColor="#9EA0A5"
      barStyle={{backgroundColor: 'white', borderRadius: 900}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Message"
        component={Chat}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Icon name="comments" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={myProfile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

const mapStateToProps = (state) => ({
  auth: state.logout,
});
const mapDispatchToProp = {logout};

export default connect(mapStateToProps, mapDispatchToProp)(Bottom);
