import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react';

const AddDeviceScreen = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [serialNumber, setSerialNumber] = useState('');
    const [computerName, setComputerName] = useState('');
    const [datePurchased, setDatePurchased] = useState('');

    const handleSave = () => {
        // Handle saving the device data here
        console.log('Serial Number:', serialNumber);
        console.log('Computer Name:', computerName);
        console.log('Date Purchased:', datePurchased);
        setIsModalVisible(false);
        navigation.goBack();
    };

    return (
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
    );
};

const styles = StyleSheet.create({
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

export default AddDeviceScreen;