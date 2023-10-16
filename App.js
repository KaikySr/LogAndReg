import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login.js';
import Cadastro from './src/pages/cadastro.js';
import { Button } from 'react-native-web';

export default function App() {
  const Stack = createStackNavigator();
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShow: false, title: 'Login' }} component={Login} />  
        <Stack.Screen name="Cadastro" options={{ headerShow: false, title: 'Cadastro' }} component={Cadastro} />   
      </Stack.Navigator> 
   </NavigationContainer>
  );
}


