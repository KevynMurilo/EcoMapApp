import React from "react";
import {} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
    Container,
    Logo,
    DivLogo,
    Title,
    SubTitle,
    Text,
    Button
} from "./styles";

import IconLogo from '../../assets/iconLogo.png';

import Feather from 'react-native-vector-icons/Feather';

export default function Initial(){
    const navigation = useNavigation();

    return(
        <Container>
            <DivLogo>
                <Logo source={IconLogo}/>
            </DivLogo>
            <Title>ECOPMAP</Title>
            <SubTitle>Monitoramento de Queimadas</SubTitle>
            <Text>
O Ecomap é um sistema que monitora queimadas em tempo real, oferecendo dados cruciais para a proteção dos ecossistemas. Com mapas interativos e informações precisas, ajuda a agir rapidamente para preservar a natureza.</Text>
            <Button onPress={() => navigation.navigate('SignIn')}>
                <Feather
                    name="arrow-right"
                    color="#FFF"
                    size={40}
                />
            </Button>
        </Container>
    )
}