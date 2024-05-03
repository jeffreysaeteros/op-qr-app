import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

const AddDevice = () => {
    const [value, setValue] = useState(0);
    return (
        <View>
            <Text>Enter Device Name:</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setValue(text)}
                value={value}
            />
        </View>
    );
};

export default AddDevice;