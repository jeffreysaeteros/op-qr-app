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

  useEffect(() => {
    (async () => {
      const { status } = await requestPermission();
      if (status !== 'granted') {
        alert('Permission to access camera was denied');
        return;
      }
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setIsScanning(false);
    setScannedData(data);
  };

  const handleStartScanning = () => {
    setScannedData('');
    setIsScanning(true);
  };

  const handleGoBackToScan = () => {
    setIsScanning(true);
    setScannedData('');
  };

  const handleGoBackHome = () => {
    setIsScanning(false);
    setScannedData('');
  }

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
      {isScanning && (
        <CameraView
          style={styles.camera}
          onBarcodeScanned={handleBarCodeScanned}
          barCodeScannerSettings={{
            barCodeTypes: ['qr'],
          }}
        />
      )}

      {!isScanning && scannedData ? (
        <>
          <Text style={styles.scannedDataText}>{scannedData}</Text>
          <Button label="Go Back" theme="primary" onPress={handleGoBackToScan} />
          <Button label="Home" theme="primary" onPress={handleGoBackHome} />
        </>
      ) : null}

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