import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const DateAndNumberInput = ({ onDataSubmit, item }) => {
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

    const handleSubmission = () => {
        // Collect data and send it back using the callback
        onDataSubmit({
            startDate,
            endDate,
            numberInput: parseInt(numberInput), // Convert to integer if needed
        });
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
                placeholder="Enter a Number"
                keyboardType="numeric"
                value={numberInput}
                onChangeText={handleNumberInputChange}
            />
            <Button title="Submit" onPress={handleSubmission} />
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
