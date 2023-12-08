import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, LoginScreen, JoinScreen, ChartScreen, ViewScreen, RecordScreen, MyScreen, MapScreen, SearchScreen } from "./src/screens/index";
import { SafeAreaView } from 'react-native';
import { BottomBar } from './src/components/bottom_bar/BottomBar';
import AppStyle from './src/styles/App.style';
import { useEffect, useState } from 'react';
import { clearAll, getData } from './src/util/AsyncStorage';

const NavigatorStack = createStackNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(false);



  useEffect(() => {
    const checkLogin = async () => {
      const data = await getData("Token");

      if (data.success) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    }
    checkLogin();
  }, [])

  return (<SafeAreaView style={AppStyle.container}>
    {isLogin ? (
      <NavigationContainer>
        <NavigatorStack.Navigator initialRouteName='Home' >
          <NavigatorStack.Screen name="Home" component={HomeScreen} options={{
            headerShown:false}} />
          <NavigatorStack.Screen name="Search" component={SearchScreen} />
          <NavigatorStack.Screen name="My" component={MyScreen} />
          <NavigatorStack.Screen name="Chart" component={ChartScreen} options={{ title: "통계" }} />
          <NavigatorStack.Screen name="Record" component={RecordScreen} />
          <NavigatorStack.Screen name="Map" component={MapScreen} options={{ title: "도서관 지도" }} />
          <NavigatorStack.Screen name="View" component={ViewScreen} options={{ headerShown: false }} />
        </NavigatorStack.Navigator>
        <BottomBar />
      </NavigationContainer>
    ) : (
      <NavigationContainer>
        <NavigatorStack.Navigator initialRouteName="Login">
          <NavigatorStack.Screen name="Login" children={() => <LoginScreen isLogin={{ isLogin, setIsLogin }} />} options={{ headerShown: false }} />
          <NavigatorStack.Screen name="Join" component={JoinScreen} options={{ title: "회원가입" }} />
        </NavigatorStack.Navigator>
      </NavigationContainer>
    )}

  </SafeAreaView>)
}

