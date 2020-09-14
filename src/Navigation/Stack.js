import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Index from '../screen/index';
import Login from '../screen/login';
import Register from '../screen/register';
import HomePage from './Bottom';
import Reset from '../screen/reset';
import changePassword from '../screen/changePassword';
import verify from '../screen/verify';
import profile from '../screen/profile';
import updateProfile from '../screen/updateProfile';
import {login} from '../redux/actions/auth';
import {connect} from 'react-redux';
function StackNavigation(props) {
  if (props.auth.data.email != undefined) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="homepage" component={HomePage} />
      </Stack.Navigator>
    );
  }else{
    return(
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="index" component={Index} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="homepage" component={HomePage} />
        <Stack.Screen name="reset" component={Reset} />
        <Stack.Screen name="changepassword" component={changePassword} />
        <Stack.Screen name="verify" component={verify} />
        <Stack.Screen name="profileHire" component={profile} />
        <Stack.Screen name="updateprofile" component={updateProfile} />
      </Stack.Navigator>
      )
  }
  
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProp = {login};

export default connect(mapStateToProps, mapDispatchToProp)(StackNavigation);
