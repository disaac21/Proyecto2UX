import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const DateAndNumberInput = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [numberInput, setNumberInput] = useState('');

    const handleStartDateChange = (text) => {
        setStartDate(text);
    };

    const handleEndDateChange = (text) => {
        setEndDate(text);
    };

    const handleNumberInputChange = (text) => {
        setNumberInput(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Start Date (YYYY-MM-DD)"
                value={startDate}
                onChangeText={handleStartDateChange}
            />
            <TextInput
                style={styles.input}
                placeholder="End Date (YYYY-MM-DD)"
                value={endDate}
                onChangeText={handleEndDateChange}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter the Number of People to Book"
                keyboardType="numeric"
                value={numberInput}
                onChangeText={handleNumberInputChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default DateAndNumberInput;