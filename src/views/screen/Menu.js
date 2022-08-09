import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/MenuStyle'

export default function Menu({ navigation }) {
  const onClickBtn = () => {
    navigation.navigate('submit')
  }
  return (
    <View style={styles.menuView}>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.menuBtn} onPress={onClickBtn}>
          <Text style={styles.menuBtnText}>신청하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.menuBtn}>
          <Text style={styles.menuBtnText}>일하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
