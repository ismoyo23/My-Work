import React from 'react';
import {View, Text, Image} from 'react-native';

function PortofolioComponent() {
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View style={{marginTop: 12}}>
        <Image
          source={require('../../main/img/designTugas.jpeg')}
          style={{width: '100%', height: 170}}
        />
      </View>

      <View style={{marginTop: 12}}>
        <Image
          source={require('../../main/img/tamplateBagus.jpg')}
          style={{width: '100%', height: 170}}
        />
      </View>
    </View>
  );
}

export default PortofolioComponent;
