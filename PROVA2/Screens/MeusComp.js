import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';

const dados = [
    { 
        title: '(Eu)',
        name: 'Isabela Suzumura Neves',
        course: 'Engenharia de Software',
        data: ['9h30: Reunião "Daily"', '14h00: Reunião com cliente Carros & Carros', '16h30: Prazo final Projeto X'] 
    },
];

export default function MeusComp() {
    return (
        <SectionList
            sections={dados}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({ section }) => (
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>{section.title}</Text>
                    <Text style={styles.subtitleName}>{section.name}</Text>
                    <Text style={styles.subtitleCourse}>{section.course}</Text>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 10,
        alignItems: 'center',
        paddingVertical: 10, 
    },
    
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
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
    item: {
        padding: 10,
    },
});