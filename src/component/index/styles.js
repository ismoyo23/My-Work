import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
  colorBg: {
    backgroundColor: '#3333cc',
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.5,
  },

  Title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 34,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    width: '99%',
    marginTop: 90,
  },

  Container: {
    marginLeft: 20,
    marginRight: 20,
  },

  buttonWorkers: {
    backgroundColor: 'white',
    borderRadius: 4,
    marginTop: 166,
    height: 50,
  },

  buttonRecruiter: {
    backgroundColor: '#5E50A1',
    borderRadius: 4,
    marginTop: 28,
    height: 50,
    opacity: 0.7,
  },
});

export default styles;
