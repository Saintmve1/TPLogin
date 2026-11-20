import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { InscriptionScreen } from '../screens/InscriptionScreen';
import { useAuth } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    const { connecter } = useAuth();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login">
                {({ navigation }) => (
                    <LoginScreen
                        onConnecte={connecter}
                        onAllerInscription={() => navigation.navigate('Inscription')}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen name="Inscription">
                {({ navigation }) => (
                    <InscriptionScreen onAllerLogin={() => navigation.navigate('Login')} />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}