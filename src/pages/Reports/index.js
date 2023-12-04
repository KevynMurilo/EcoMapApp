import React from "react";
import { ScrollView } from "react-native";


import { 
    Container,
    Title,
    Image, 
} from "./styles";

import Image1 from '../../assets/1.png';
import Image2 from '../../assets/2.png';
import Image3 from '../../assets/3.png';
import Image4 from '../../assets/4.png';
import Image5 from '../../assets/5.png';
import MoreVertical from "../../components/MoreVertical";

export default function Reports() {
    return (
        <Container>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <Title>Painel de Monitoramento</Title>
                <Image source={Image1} />
                <Image source={Image2} />
                <Image source={Image3} />
                <Image source={Image4} />
                <Image source={Image5} />
            </ScrollView>
            <MoreVertical/>
        </Container>
        );
    }