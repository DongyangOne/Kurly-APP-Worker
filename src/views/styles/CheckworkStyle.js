const { StyleSheet, Dimensions } = require('react-native'),
  Color = require('../../../assets/color')

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

module.exports = StyleSheet.create({
  mainView: {
    marginTop: 34,
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerText: {
    fontSize: 36,
    color: 'purple',
  },
  content: {
    flex: 12,
  },
  chapter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  chapterText: {
    fontSize: 30,
  },
  chart: {
    flex: 8,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: { height: 30, backgroundColor: '#808B97' },
  text: { color: Color.black },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btnText: { textAlign: 'center', color: '#fff' },
  submitView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtn: {
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.blue,
  },
  submitText: {
    color: Color.white,
  },
})
