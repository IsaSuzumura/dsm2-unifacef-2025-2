import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import MeusComp from './Screens/MeusComp';
import Equipe from './Screens/Equipe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Compromissos" component={MeusComp} />
        <Stack.Screen name="Equipe" component={Equipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}