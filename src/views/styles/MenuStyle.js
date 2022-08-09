const { StyleSheet } = require('react-native'),
  Color = require('../../../assets/color')

module.exports = StyleSheet.create({
  menuView: {
    marginTop: 34,
    flex: 1,
  },
  menuBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 80,
    backgroundColor: Color.blue,
  },
  menuBtnText: {
    fontSize: 36,
    color: Color.white,
  },
  btnView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})
