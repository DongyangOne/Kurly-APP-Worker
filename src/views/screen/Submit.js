import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/SubmitStyle'

export default function Submit({ navigation }) {
  const onClickBtn = () => {
    navigation.navigate('workingsubmit')
  }
  const onClickBtn2 = () => {
    navigation.navigate('checkwork')
  }
  return (
    <View style={styles.submitView}>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.submitBtn} onPress={onClickBtn}>
          <Text style={styles.submitBtnText}>업무 신청</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.submitBtn} onPress={onClickBtn2}>
          <Text style={styles.submitBtnText}>임금 높은 근무지</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
