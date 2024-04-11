import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const styles = StyleSheet.create({
    primaryButtonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    primaryButton: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    secondaryButtonContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',

    },
    secondaryButton: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 5,
        width: 150,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});

export default function Button({ label, labelOne, labelTwo, onPress, onPressOne, onPressTwo, theme }) {
    if (theme === "primary") {
        return (
            <View style={[styles.primaryButtonContainer, { borderRadius: 18 }]}>
                <Pressable style={[styles.primaryButton, { backgroundColor: "#fff" }]} onPress={onPress}>
                    <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    else if (theme === "secondary") {
        return (
            <View style={styles.secondaryButtonContainer}>
                <Pressable style={styles.secondaryButton} onPress={onPressOne}>
                    <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{labelOne}</Text>
                </Pressable>
                <Pressable style={styles.secondaryButton} onPress={onPressTwo}>
                    <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{labelTwo}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}
