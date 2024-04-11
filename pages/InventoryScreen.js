import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Data from '../Data';

export default function InventoryScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Data navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25292e',
    },
});