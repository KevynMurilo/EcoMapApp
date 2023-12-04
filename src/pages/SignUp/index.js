import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import { 
    Container,
    ContainerInputs,
    TextTypeInput,
    TextInput,
    Button,
    TextButton
} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp(){
    const { SignUp, loadingAuth } = useContext(AuthContext);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSignUp(){
        if(nome === '' || email === '' || password === '' || confirmPassword === '') return;
        SignUp(nome, email, password, confirmPassword)
    }

    return(
        <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
        >
            <ContainerInputs>
                <TextTypeInput>Name</TextTypeInput>
                <TextInput
                    placeholder='Digite seu nome'
                    value={nome}
                    placeholderTextColor="#505050"
                    onChangeText={(text) => setNome(text)}
                />

                <TextTypeInput>Email</TextTypeInput>
                <TextInput
                    placeholder='Digite seu email'
                    placeholderTextColor="#505050"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <TextTypeInput>Password</TextTypeInput>
                <TextInput
                    placeholder='Digite sua senha'
                    placeholderTextColor="#505050"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />

                <TextTypeInput>Confirm password</TextTypeInput>
                <TextInput
                    placeholder='Repita sua senha'
                    placeholderTextColor="#505050"
                    value={confirmPassword}
                    secureTextEntry={true}
                    onChangeText={(text) => setConfirmPassword(text)}
                />
            </ContainerInputs>

            <Button onPress={handleSignUp}>
                {
                    loadingAuth ? (
                        <ActivityIndicator size={20} color="#FFF"/>
                    ) : (
                        <TextButton>Create Account</TextButton>
                    )
                }
                
            </Button>
        </Container>
    )
}