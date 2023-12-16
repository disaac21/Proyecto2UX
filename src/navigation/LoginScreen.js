import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log(error);
            Alert("Sign In Failed: " + error.message);
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            Alert("Check your emails!");
        } catch (error) {
            console.log(error);
            Alert("Create User Failed: " + error.message);
        } finally {
            setLoading(false);
        }
    }

    // const goToSignUp = () => {
    //     navigation.navigate('SignUp'); // Navigate to SignUp screen
    // };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login Screen</Text>
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
            <Button title='Login' onPress={() => signIn()}/>
            <Button title='Crear CUenta' onPress={() => signUp()}/>
            
            {/* <Button title="Go to Sign Up" onPress={goToSignUp}/> */}
        </View>
    );
};

export default LoginScreen;
