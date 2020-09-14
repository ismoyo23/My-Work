import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import styles from './styles';
function changeExperienceComponent(params) {
  return (
    <>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <View style={{marginTop: 40}}>
          <Text style={{color: '#9EA0A5'}}>Name Company</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Input Name Company"
          />

          <Text style={{color: '#9EA0A5', marginTop: 30}}>Description</Text>
          <TextInput style={styles.formInput} placeholder="Input Description" />

          <Text style={{color: '#9EA0A5', marginTop: 30}}>Jabatan</Text>
          <TextInput style={styles.formInput} placeholder="Masukkan Jabatan" />
        </View>

        <View
          style={{
            marginTop: 12,
            backgroundColor: 'orange',
            width: '100%',
            height: 50,
            borderRadius: 10,
            marginBottom: 12,
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

        <View
          style={{height: 300, backgroundColor: 'white', flexDirection: 'row'}}>
          <Image
            source={require('../../main/img/tokopedia.png')}
            style={{width: 50, height: 50, borderRadius: 30, marginTop: 12}}
          />

          <View style={{width: 210}}>
            <View style={styles.badge}>
              <Text style={{textAlign: 'center', marginTop: 5, color: 'white'}}>
                Delete
              </Text>
            </View>
            <Text style={{marginTop: 10, fontWeight: 'bold'}}>Tokopedia</Text>
            <Text style={{color: 'gray'}}>Sofwere Enginer</Text>
            <Text style={{color: 'gray', fontSize: 12}}>
              Jul 2018 - Sep 2019
            </Text>
            <Text style={{color: 'gray', marginTop: 9}}>
              Download Logo Tokopedia PNG, Free Toko Pedia Vector Transparent
              PNG Logos. That you can download to your computer and use in your
              designs. Download Logo Tokopedia PNG, Free Toko Pedia Vector
              Transparent PNG Logos. That you can download to your computer and
              use in your designs.
            </Text>
          </View>
        </View>

        <View
          style={{height: 300, backgroundColor: 'white', flexDirection: 'row'}}>
          <Image
            source={require('../../main/img/tokopedia.png')}
            style={{width: 50, height: 50, borderRadius: 30, marginTop: 12}}
          />
          <View style={{width: 210}}>
            <View style={styles.badge}>
              <Text style={{textAlign: 'center', marginTop: 5, color: 'white'}}>
                Delete
              </Text>
            </View>
            <Text style={{marginTop: 10, fontWeight: 'bold'}}>Tokopedia</Text>
            <Text style={{color: 'gray'}}>Sofwere Enginer</Text>
            <Text style={{color: 'gray', fontSize: 12}}>
              Jul 2018 - Sep 2019
            </Text>
            <Text style={{color: 'gray', marginTop: 9}}>
              Download Logo Tokopedia PNG, Free Toko Pedia Vector Transparent
              PNG Logos. That you can download to your computer and use in your
              designs. Download Logo Tokopedia PNG, Free Toko Pedia Vector
              Transparent PNG Logos. That you can download to your computer and
              use in your designs.
            </Text>
          </View>
        </View>

        <View
          style={{height: 300, backgroundColor: 'white', flexDirection: 'row'}}>
          <Image
            source={require('../../main/img/tokopedia.png')}
            style={{width: 50, height: 50, borderRadius: 30, marginTop: 12}}
          />
          <View style={{width: 210}}>
            <View style={styles.badge}>
              <Text style={{textAlign: 'center', marginTop: 5, color: 'white'}}>
                Delete
              </Text>
            </View>
            <Text style={{marginTop: 10, fontWeight: 'bold'}}>Tokopedia</Text>
            <Text style={{color: 'gray'}}>Sofwere Enginer</Text>
            <Text style={{color: 'gray', fontSize: 12}}>
              Jul 2018 - Sep 2019
            </Text>
            <Text style={{color: 'gray', marginTop: 9}}>
              Download Logo Tokopedia PNG, Free Toko Pedia Vector Transparent
              PNG Logos. That you can download to your computer and use in your
              designs. Download Logo Tokopedia PNG, Free Toko Pedia Vector
              Transparent PNG Logos. That you can download to your computer and
              use in your designs.
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default changeExperienceComponent;
