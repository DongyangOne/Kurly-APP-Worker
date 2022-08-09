import { TouchableOpacity, View, Text } from 'react-native'
import styles from '../styles/WorkingSubmit'

export default function WorkingSubmit({ navigation }) {
  const onClickBtn = () => {
    navigation.navigate('menu')
  }
  return (
    <View style={styles.workView}>
      <View style={styles.topView}>
        <View style={styles.topBtnView}>
          <TouchableOpacity style={styles.topBtn}>
            <Text style={styles.topBtnText}>근무지 선택</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topBtnView}>
          <TouchableOpacity style={styles.topBtn}>
            <Text style={styles.topBtnText}>날짜 선택</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topBtnView}>
          <TouchableOpacity style={styles.topBtn}>
            <Text style={styles.topBtnText}>시간 선택</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomVeiw}>
        <TouchableOpacity style={styles.bottomBtn} onPress={onClickBtn}>
          <Text style={styles.bottomBtnText}>제출</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
