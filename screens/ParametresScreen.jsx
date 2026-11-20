import { View, Text, StyleSheet } from 'react-native';

export const ParametresScreen = () => (
    <View style={styles.ecran}>
        <Text style={styles.titre}>Paramètres</Text>
    </View>
);

const styles = StyleSheet.create({
    ecran: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    titre: { fontSize: 22, fontWeight: '700' },
});