import { Text, TouchableOpacity, View } from 'react-native'
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component'
import styles from '../styles/CheckworkStyle'

export default function CheckWork({ navigation }) {
  const headData = ['no', '근무지', '업무', '임금']
  const bodyData = [['1', '곤지암', '피킹', '12']]

  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <Text style={styles.headerText}>마켓컬리</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.chapter}>
          <Text style={styles.chapterText}>송파 물류센터</Text>
        </View>
        <View style={styles.chart}>
          <Table borderStyle={{ borderColor: 'transparent' }}>
            <Row data={headData} style={styles.head} textStyle={styles.text} />
            {bodyData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={cellData}
                    textStyle={styles.text}
                  />
                ))}
              </TableWrapper>
            ))}
          </Table>
        </View>
        <View style={styles.submitView}>
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitText}>신청</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
