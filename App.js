import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCameraPermissions } from 'expo-camera/next';

import HomeScreen from './screens/HomeScreen';
import InventoryScreen from './screens/InventoryScreen';
import DetailScreen from './screens/DetailScreen';
import ScanScreen from './screens/ScanScreen';
import AddDeviceScreen from './screens/AddDeviceScreen';

const Stack = createNativeStackNavigator();

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

  const handleBarCodeScanned = (data, navigation) => {
    setScannedData(data);
    navigation.navigate('Home');
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
  };

  // Camera permissions
  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text>Camera permission is required to use this feature.</Text>
      </View>
    );
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#25292e' },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Home">
          {props => (
            <HomeScreen
              {...props}
              scannedData={scannedData}
              handleGoBackHome={handleGoBackHome}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Scan">
          {props => (
            <ScanScreen
              {...props}
              handleBarCodeScanned={(data) => handleBarCodeScanned(data, props.navigation)}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Inventory" component={InventoryScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="AddDevice" component={AddDeviceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
}; 