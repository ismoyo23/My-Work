import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
  Container: {
    marginLeft: 20,
    marginRight: 20,
  },

  body: {
    marginTop: 100,
  },

  buttonRecruiter: {
    backgroundColor: '#4d0099',
    borderRadius: 4,
    marginTop: 28,
    height: 50,
    opacity: 0.7,
    width: '90%',
  },
  buttonCancel: {
    borderWidth: 2,
    color: '#FBB017',
    backgroundColor: 'white',
    borderRadius: 4,
    marginTop: 19,
    height: 50,
    width: '90%',
  },

  textTitle: {
    fontSize: 14,
    color: '#858D96',
    fontWeight: 'normal',
    lineHeight: 19,
  },

  badge: {
    backgroundColor: 'orange',
    width: 90,
    height: 30,
    borderRadius: 30,
    marginLeft: 9,
    marginTop: 9,
  },

  formInput: {
    width: '100%',
    height: 50,
    borderRadius: 2,
    borderColor: '#E2E5ED',
    borderWidth: 1,
    marginTop: 4,
  },
});

export default styles;
