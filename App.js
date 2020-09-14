/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Stack from './src/Navigation/Stack';
import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import storage from './src/redux/store';
let {store, persistor} = storage;
import {PersistGate} from 'redux-persist/integration/react';
const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
