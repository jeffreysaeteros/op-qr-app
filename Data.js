import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, ActivityIndicator, Pressable, View } from "react-native";
import { Card, Paragraph, Title } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FetchData from "./FetchData";

export default function Data({ navigation }) {
    const [value, setValue] = useState();

    useEffect(() => {
        let data = async () => {
            setValue(await FetchData());
        };
        data();
    }, []);

    if (!value) {
        return <ActivityIndicator size="large" color="#00ff00" />;
    }

    return (
        <ScrollView style={styles.scrollView}>
            {value.map((item, index) => (
                <Pressable key={index} onPress={() => navigation.navigate('Detail', { item: item })}>
                    <Card style={styles.card}>
                        <Card.Content>
                            <View style={styles.row}>
                                <Paragraph style={styles.label}>Serial Number:</Paragraph>
                                <Paragraph style={[styles.text, styles.serialNumber]}>{item[0]}</Paragraph>
                            </View>
                            <View style={styles.row}>
                                <Paragraph style={styles.label}>Computer Name:</Paragraph>
                                <Paragraph style={[styles.text, styles.compName]}>{item[1]}</Paragraph>
                            </View>
                            <View style={styles.row}>
                                <Paragraph style={styles.label}>Checked-Out Student:</Paragraph>
                                <Paragraph style={[styles.text, styles.checkedOut]}>{`${item[4]} ${item[5]}`}</Paragraph>
                            </View>
                        </Card.Content>
                    </Card>
                </Pressable>
            ))}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
    },
    card: {
        marginVertical: 4,
        backgroundColor: '#25292e',
    },
    text: {
        color: '#fff',
        marginLeft: 10,
    },
    label: {
        color: '#ccc',
        fontWeight: 'bold',
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 8,
    },
    serialNumber: {
        minWidth: 150,
    },
    type: {
        minWidth: 100,
    },
    checkedOut: {
        minWidth: 200,
    },
});
