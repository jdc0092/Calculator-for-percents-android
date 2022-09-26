
import { StyleSheet } from 'react-native';
const styleTabletForPercents = StyleSheet.create({

  // Style for home
  contContainer: {
    justifyContent: 'space-between',
    height: '100%'
  },

  contInfo: {
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-between'

  },

  contBtnMenuBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    width: "100%"
  },

  Buttons: {
    borderRadius: 0,
    width: '100%',
    flex: 1,

  },

  ButtonsMenu: {
    flex: 1,
    width: '100%',
  },


  ButtonsPercent: {
    borderRadius: 0,
    width: '100%',
    flex: 1,
    marginLeft: 5,
    marginRight: 5

  },


  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 15,
    flex: 1,
    borderColor: '#ccc'


  },

  contBtn: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',

  },



  tabletHeadBgColor: {
    backgroundColor: '#000',
  },

  infoHeadTablet: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700'
  },

  infoTablet: {
    color: '#000',
    fontSize: 17,

  },

  tabletHead: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between'

  },

  contInfoTablet: {
    marginLeft: 15,
    marginRight: 15,

  },

  displayTable: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },

  displayTableActive: {
    backgroundColor: '#000',
  },



  contInput: {
    marginTop: 20
  },


  btnNumbersPercent: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#d53434',
    borderRadius: 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },

  btnMenu: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#3a3a3a',
    borderRadius: 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnMenuText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },

  btnMenu: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#607e15',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },

  btnMenuText: {
    color: '#fff',
    fontSize: 18,
  }



});


export default styleTabletForPercents;

