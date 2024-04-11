import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Paragraph } from 'react-native-paper';

const DetailScreen = ({ route }) => {
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Paragraph style={styles.paragraph}>Serial Number: {item[0]}</Paragraph>
                    <Paragraph style={styles.paragraph}>Computer Name: {item[1]}</Paragraph>
                    <Paragraph style={styles.paragraph}>Date Purchased: {item[2]}</Paragraph>
                    <Paragraph style={styles.paragraph}>Make/Model: {item[3]}</Paragraph>
                    <Paragraph style={styles.paragraph}>Checked-Out: {item[4]} {item[5]}</Paragraph>
                    <Paragraph style={styles.paragraph}>Check-Out Date: {item[7]}</Paragraph>
                    <Paragraph style={styles.paragraph}>Student Grad Year: {item[8]}</Paragraph>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        width: '100%',
        padding: 10,
        backgroundColor: '#25292e',
    },
    paragraph: {
        fontSize: 16,
        color: '#ffffff',
        paddingVertical: 10,
    }
});

export default DetailScreen;
