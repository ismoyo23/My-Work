import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
  badge: {
    backgroundColor: 'orange',
    width: 70,
    borderRadius: 23,
    marginLeft: 9,
    marginTop: 3,
    height: 18,
  },

  textBadge: {
    marginLeft: 12,
    marginRight: 12,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  },
  Container: {
    marginLeft: 20,
    marginRight: 20,
  },

  body: {
    marginTop: 100,
  },

  title: {
    marginTop: 9,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 35,
  },

  textTitle: {
    fontSize: 14,
    color: '#858D96',
    fontWeight: 'normal',
    lineHeight: 19,
  },

  Body: {
    height: 500,
    width: '100%',
  },

  card: {
    marginTop: 12,
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
  },

  tinyLogo: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginTop: 13,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
  },
  modalView: {
    width: 330,
    height: 540,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: 'absolute',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  skill: {
    marginTop: 23,
  },
});

export default styles;
