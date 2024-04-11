import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Button';

const HomeScreen = ({ navigation, scannedData, handleGoBackHome }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            {scannedData ? (
                <>
                    <Text style={styles.scannedDataText}>{scannedData}</Text>
                    <Button
                        labelOne="Check-In Device"
                        labelTwo="Check-Out Device"
                        theme="secondary"
                        onPressOne={() => console.log('Check-In')}
                        onPressTwo={() => console.log('Check-Out')}
                    />
                    <Button
                        labelOne="Inspect"
                        labelTwo="Inventory"
                        theme="secondary"
                        onPressOne={() => console.log('Inspect')}
                        onPressTwo={() => navigation.navigate('Inventory')}
                    />
                    <Button label="Home" theme="primary" onPress={handleGoBackHome} />
                </>
            ) : (
                <Button
                    label="Scan Device"
                    theme="primary"
                    onPress={() => navigation.navigate('Scan')}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scannedDataText: {
        color: '#fff',
        margin: 20,
        fontSize: 18,
    },
});

export default HomeScreen;