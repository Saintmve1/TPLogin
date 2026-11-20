import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './TabNavigator';
import { ProfilScreen } from '../screens/ProfilScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Menu Principal"
      screenOptions={{
        headerStyle: { backgroundColor: '#1b5ae2' },
        headerTintColor: '#ffffff',
        drawerStyle: { backgroundColor: '#1b5ae2', width: 260 },
        drawerActiveTintColor: '#FFFFFF',
        drawerActiveBackgroundColor: '#0043d2',
        drawerInactiveTintColor: '#9CA3AF',
      }}
    >
      <Drawer.Screen
        name="Menu Principal"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}