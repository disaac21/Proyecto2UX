import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSignUp = () => {
        // Implement your sign-up logic here using 'email', 'password', and 'username'
        // For example: Create a new user account
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Sign Up Screen</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{ borderWidth: 1, padding: 10, margin: 10, width: 200 }}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                style={{ borderWidth: 1, padding: 10, margin: 10, width: 200 }}
            />
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
                style={{ borderWidth: 1, padding: 10, margin: 10, width: 200 }}
            />
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

export default SignUpScreen;
