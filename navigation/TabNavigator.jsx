import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AccueilScreen } from '../screens/AccueilScreen';
// CHANGEMENT : chaque écran est importé depuis son propre fichier
import { ProduitsScreen } from '../screens/ProduitsScreen';
import { ParametresScreen } from '../screens/ParametresScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          backgroundColor: '#09379c',
          borderTopColor: '#e9eaed',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Accueil') {
            iconName = 'home';
          // CHANGEMENT : 'Produits' au lieu de 'Catalogue'
          } else if (route.name === 'Produits') {
            iconName = 'list';
          } else if (route.name === 'Paramètres') {
            iconName = 'settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Accueil" component={AccueilScreen} />
      <Tab.Screen name="Produits" component={ProduitsScreen} />
      <Tab.Screen name="Paramètres" component={ParametresScreen} />
    </Tab.Navigator>
  );
}