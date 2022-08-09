import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import CheckWork from '../views/screen/CheckWork'
import Menu from '../views/screen/Menu'
import Submit from '../views/screen/Submit'
import WorkingSubmit from '../views/screen/WorkingSubmit'

const Stack = createNativeStackNavigator()

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="menu"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="menu"
          component={Menu}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="submit"
          component={Submit}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="workingsubmit"
          component={WorkingSubmit}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="checkwork"
          component={CheckWork}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
