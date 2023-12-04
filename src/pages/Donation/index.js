import React, { useState } from "react";
import { Modal } from "react-native";
import * as Styles from "./styles";

import MoreVertical from "../../components/MoreVertical";
import ImageBackground from '../../assets/reflorestamento.jpeg';
import ImageModalQrCode from '../../assets/qr-code-plus.png';

export default function Donation() {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    

    return (
        <Styles.Container>
        <MoreVertical />
        <Styles.Image source={ImageBackground} />

        <Styles.ContainerText>
            <Styles.Title>Ajude a reconstruir o mundo!</Styles.Title>
            <Styles.SubTitle>
            O eucalipto é conhecido por se desenvolver em qualquer tipo de solo
            ou condição climática, se adaptando ao ambiente em que se encontra,
            além de ser resistente a ações do tempo, pragas e cupins.
            </Styles.SubTitle>
        </Styles.ContainerText>

        <Styles.ContainerLines>
            <Styles.LineLeft />
            <Styles.LineRight />
        </Styles.ContainerLines>

        <Styles.ContainerValues>
            <Styles.TextValue>Meta</Styles.TextValue>
            <Styles.TextValue>R$ 500 (50%)</Styles.TextValue>
        </Styles.ContainerValues>

        <Styles.Button onPress={toggleModal}>
            <Styles.TextButton>DOAR</Styles.TextButton>
        </Styles.Button>

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}
        >
            <Styles.ModalBackground
            onPress={toggleModal}
            >
            <Styles.ModalContainer>
                <Styles.ImageModal source={ImageModalQrCode}/>
                <Styles.ButtonModal>
                    <Styles.TextButtonModal>
                        Copiar
                    </Styles.TextButtonModal>
                </Styles.ButtonModal>
            </Styles.ModalContainer>
            </Styles.ModalBackground>
        </Modal>
        </Styles.Container>
    );
}
