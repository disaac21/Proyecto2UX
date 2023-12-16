import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
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
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido A Su App de Viajes de Confianza</Text>
            <Text style={styles.body}>Ingrese sus Credenciales para Continuar</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button} onPress={() => signIn()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.createButton]} onPress={() => signUp()}>
                    <Text style={styles.buttonText}>Crear Cuenta</Text>
                </TouchableOpacity>
                {/* <Button title="Go to Sign Up" onPress={goToSignUp}/> */}
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        alignItems: 'center',
        textAlign: 'center',
    },
    body: {
        fontSize: 18,
        marginBottom: 20,
        alignItems: 'center',
        textAlign: 'center',
    },
    inputContainer: {
        width: 250,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#3498db',
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    createButton: {
        backgroundColor: '#2ecc71',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


export default LoginScreen;
