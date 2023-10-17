import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login.js';
import Cadastro from './src/pages/cadastro.js';
import Usuario from './src/pages/usuarios.js';


export default function App() {
  const Stack = createStackNavigator();
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false, title: 'Login' }} component={Login} />  
        <Stack.Screen name="Cadastro" options={{ headerShown: false, title: 'Cadastro' }} component={Cadastro} /> 
        <Stack.Screen name="Usuario" options={{ headerShown: false, title: 'Usuario' }} component={Usuario} />     
      </Stack.Navigator> 
   </NavigationContainer>
  );
}


