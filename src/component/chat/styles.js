import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
  body: {
    marginTop: 20,
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  container: {
    marginLeft: 14,
    marginRight: 14,
  },

  box: {
    zIndex: 2,
    width: 50,
    height: 60,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 20,
    elevation: 5,
    marginLeft: 12,
  },

  card: {
    marginTop: 9,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    height: 80,
    borderRadius: 20,
  },

  badge: {
    backgroundColor: 'orange',

    borderRadius: 23,
    marginLeft: 9,
    marginTop: 3,
  },

  textBadge: {
    marginLeft: 12,
    marginRight: 12,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
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
    elevation: 3,
    height: 500,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  textShor: {
    fontSize: 18,
  },

  skill: {
    marginTop: 23,
  },
});

export default styles;
