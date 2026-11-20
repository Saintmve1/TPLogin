import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

export const AccueilScreen = () => {
    const { utilisateur } = useAuth();
    return (
        <View style={styles.ecran}>
            <Text style={styles.titre}>Accueil</Text>
            <Text style={styles.texte}>Bienvenue {utilisateur?.prenom}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ecran: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    titre: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
    texte: { fontSize: 16, color: '#374151' },
});