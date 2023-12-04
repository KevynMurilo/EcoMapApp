import React, {useState, useContext} from "react";
import {ActivityIndicator, Platform} from 'react-native';

import { 
    Container,
    DivLogo,
    Logo,
    TextLogin,
    ContainerInputs,
    TextTypeInput,
    TextInput,
    Button,
    TextButton,
    ContainerSignUp,
    TextSignUp,
    ClickSignUp
} from "./styles";

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

import IconLogo from '../../assets/iconLogo.png';

export default function SignIn(){
    const navigation = useNavigation();
    const { SignIn, loadingAuth} = useContext(AuthContext);

    const [EmailLogin, setEmailLogin] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        SignIn(EmailLogin, password);
    }
    
    return(
        <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
        >
            <DivLogo>
                <Logo source={IconLogo}/>
            </DivLogo>
            <TextLogin>LOGIN</TextLogin>
            
            <ContainerInputs>
                <TextTypeInput>EMAIL</TextTypeInput>
                <TextInput 
                    placeholder="email@email.com"
                    value={EmailLogin}
                    placeholderTextColor="#505050"
                    onChangeText={(text) => setEmailLogin(text)}
                    />

                <TextTypeInput>Password</TextTypeInput>
                <TextInput 
                    placeholder="***********"
                    value={password}
                    secureTextEntry={true}
                    placeholderTextColor="#505050"
                    onChangeText={(text) => setPassword(text)}
                    />
            </ContainerInputs>

            <Button onPress={handleLogin}>
                {
                    loadingAuth ? (
                        <ActivityIndicator size={20} color="#FFF"/>
                    ) : (
                        <TextButton>ACESSAR</TextButton>
                    )
                }
            </Button>

            <ContainerSignUp>
                <TextSignUp>Dont't have any account? </TextSignUp>
                <ClickSignUp onPress={() => navigation.navigate('SignUp')}>
                    <TextSignUp style={{color:"#000", fontWeight: 'bold'}}>
                        SignUp
                    </TextSignUp>
                </ClickSignUp>
            </ContainerSignUp>


        </Container>
    )
}