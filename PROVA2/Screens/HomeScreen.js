import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Agenda do dia</Text>
            <Text style={styles.subtitleName}>Isabela Suzumura Neves</Text>
            <Text style={styles.subtitleCourse}>Engenharia de Software</Text>
            <Button
                title="Meus Compromissos"
                onPress={() => navigation.navigate('Compromissos')}
            />
            <Button 
                title="Compromissos da Equipe"
                onPress={() => navigation.navigate('Equipe')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'space-around', alignItems: 'center' },
    texto: { fontSize: 20, marginTop: 5 },
    titulo: { fontSize: 30, marginTop: 10, height: 'bold' },
    subtitleName: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 4, 
    },
    subtitleCourse: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 4,
    },
});