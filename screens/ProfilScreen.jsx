import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

export const ProfilScreen = () => {
    const { utilisateur, deconnecter } = useAuth();
    return (
        <View style={styles.ecran}>
            <Text style={styles.titre}>Profil</Text>
            <Text style={styles.texte}>
                {utilisateur?.prenom} {utilisateur?.nom}
            </Text>
            <Text style={styles.texte}>{utilisateur?.email}</Text>
            <Pressable onPress={deconnecter} style={styles.bouton}>
                <Text style={styles.boutonTexte}>Se déconnecter</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    ecran: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
    titre: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
    texte: { fontSize: 16, color: '#374151', marginBottom: 4 },
    bouton: { backgroundColor: '#2563EB', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, marginTop: 20 },
    boutonTexte: { color: '#FFFFFF', fontWeight: '600' },
});