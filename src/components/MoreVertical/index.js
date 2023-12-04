import React, { useState, useContext } from "react";
import { Container, Click, Text, ModalContainer, ModalContent } from "./styles";
import Feather from 'react-native-vector-icons/Feather';
import { TouchableWithoutFeedback, View } from "react-native";

import { AuthContext } from "../../contexts/auth";

export default function MoreVertical({ openModal }) {
    const {SignOut} = useContext(AuthContext);

    const [visible, setVisible] = useState(false);

    const toggleModal = () => {
        setVisible(!visible);
    };

    const closeModal = () => {
        setVisible(false);
    };

    return (
        <Container isOpen={visible}>
            <Click onPress={toggleModal}>
                <Feather
                    name="more-vertical"
                    size={40}
                    color="#FFF"
                />
            </Click>

            <ModalContainer
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={toggleModal}
            >
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={{flex: 1}}/>
                </TouchableWithoutFeedback>
                
                    <ModalContent onPress={() => SignOut()}>
                        <Text>Desconectar</Text>
                    </ModalContent>
                
            </ModalContainer>
        </Container>
    )
}
