import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera/next';

import Button from './components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
    aspectRatio: 0.8,
  },
  scannedDataText: {
    color: '#fff',
    margin: 20,
    fontSize: 18,
  },
});

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState('');

  // Request camera permission on component mount
  useEffect(() => {
    (async () => {
      const { status } = await requestPermission();
      if (status !== 'granted') {
        alert('Permission to access camera was denied');
        return;
      }
    })();
  }, []);

  // Handle barcode scanned event
  const handleBarCodeScanned = ({ data }) => {
    setIsScanning(false);
    setScannedData(data);
  };

  // Handle start scanning button press
  const handleStartScanning = () => {
    setScannedData('');
    setIsScanning(true);
  };

  // Handle go back to scan button press
  const handleGoBackToScan = () => {
    setIsScanning(true);
    setScannedData('');
  };

  // Handle go back home button press
  const handleGoBackHome = () => {
    setIsScanning(false);
    setScannedData('');
  }

  // Show message if camera permission is not granted
  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text>Camera permission is required to use this feature.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Show camera view if scanning is enabled */}
      {isScanning && (
        <CameraView
          style={styles.camera}
          onBarcodeScanned={handleBarCodeScanned}
          barCodeScannerSettings={{
            barCodeTypes: ['qr'],
          }}
        />
      )}

      {/* Show scanned data and buttons if scanning is disabled */}
      {!isScanning && scannedData ? (
        <>
          <Text style={styles.scannedDataText}>{scannedData}</Text>
          <Button label="Check-In Device" theme="primary" onPress />
          <Button label="Check-Out Device" theme="primary" onPress />
          <Button label="Inventory" theme="primary" onPress />
          <Button label="Go Back" theme="primary" onPress={handleGoBackToScan} />
          <Button label="Home" theme="primary" onPress={handleGoBackHome} />
        </>
      ) : null}

      {/* Show start scanning button if scanning is disabled */}
      {!isScanning && !scannedData && (
        <Button
          label="Start Scanning"
          theme="primary"
          onPress={handleStartScanning}
        />
      )}
    </View>
  );
}