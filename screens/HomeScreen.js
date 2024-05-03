import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react';
import Button from '../components/Button';

const HomeScreen = ({ navigation, scannedData, handleGoBackHome }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [serialNumber, setSerialNumber] = useState('');
    const [computerName, setComputerName] = useState('');
    const [datePurchased, setDatePurchased] = useState('');

    const handleAddDevice = () => {
        setIsModalVisible(true);
    };

    const handleSave = () => {
        // Handle saving the device data here
        console.log('Serial Number:', serialNumber);
        console.log('Computer Name:', computerName);
        console.log('Date Purchased:', datePurchased);
        setIsModalVisible(false);
        setSerialNumber('');
        setComputerName('');
        setDatePurchased('');
    };

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
            <Button label="Add Device" theme="primary" onPress={handleAddDevice} />

            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Add Device</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Serial Number"
                        value={serialNumber}
                        onChangeText={setSerialNumber}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Computer Name"
                        value={computerName}
                        onChangeText={setComputerName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Date Purchased"
                        value={datePurchased}
                        onChangeText={setDatePurchased}
                    />
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    saveButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default HomeScreen;