const { StyleSheet } = require('react-native'),
  Color = require('../../../assets/color')

module.exports = StyleSheet.create({
  workView: {
    flex: 1,
  },
  topView: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomVeiw: { flex: 1, alignItems: 'center', marginBottom: -500 },
  topBtnView: { flex: 1 },
  topBtn: {
    width: 300,
    height: 50,
    backgroundColor: Color.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBtnText: {
    fontSize: 24,
    color: Color.white,
  },
  bottomBtn: {
    width: 200,
    height: 50,
    backgroundColor: Color.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBtnText: {
    fontSize: 24,
    color: Color.white,
  },
})
