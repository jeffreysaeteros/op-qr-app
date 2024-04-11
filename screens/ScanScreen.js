import { StyleSheet, View } from 'react-native';
import { CameraView } from 'expo-camera/next';

const ScanScreen = ({ navigation, handleBarCodeScanned }) => {
    return (
        <View style={styles.container}>
            <CameraView
                style={styles.camera}
                onBarcodeScanned={({ data }) => handleBarCodeScanned(data, navigation)}
                barCodeScannerSettings={{ barCodeTypes: ['qr'] }}
            />
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
    camera: {
        height: '70%',
        aspectRatio: 0.6,
    },
});

export default ScanScreen;