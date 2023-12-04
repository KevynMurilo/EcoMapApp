import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        async function loadStorage() {
        try {
            const storageUser = await AsyncStorage.getItem('@finToken');
            console.log('Conteúdo do AsyncStorage:', storageUser);

            if (storageUser) {
            const userData = JSON.parse(storageUser);
            console.log('Usuário carregado do AsyncStorage:', userData);
            setUser(userData);
            }
        } catch (error) {
            console.error('Erro ao carregar usuário do AsyncStorage:', error);
        } finally {
            setLoadingAuth(false);
        }
        }
        loadStorage();
    }, []);

    async function SignIn(EmailLogin, password) {
        setLoadingAuth(true);

        try {
        const response = await api.post('/auth/login', {
            email: EmailLogin,
            password: password
        });

        const { id, name, email, token } = response.data;
        const userData = {
            id,
            name,
            email,
            token
        };

        await AsyncStorage.setItem('@finToken', JSON.stringify(userData));
        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        setUser(userData);
        setLoadingAuth(false);
        navigation.navigate('StackRoutes');
        } catch (err) {
        console.log("ERRO AO LOGAR", err);
        setLoadingAuth(false);
        }
    }

    async function SignUp(nome, email, password, confirmPassword) {
        setLoadingAuth(true);
        try {
        const response = await api.post('/auth/register', {
            name: nome,
            email: email,
            password: password,
            confirmpassword: confirmPassword
        });
        setLoadingAuth(false);
        navigation.goBack();
        } catch (err) {
        console.log("ERRO AO CADASTRAR", err)
        setLoadingAuth(false);
        }
    }

    async function SignOut() {
        await AsyncStorage.removeItem('@finToken');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, SignIn, SignUp, SignOut, loadingAuth }}>
        {children}
        </AuthContext.Provider>
    )
}
