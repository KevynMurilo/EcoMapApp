import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #202020;
    align-items: center;
`;

export const Image = styled.Image`
    margin-top: 22%;
    width: 380px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
`;

export const ContainerText = styled.View`
    width: 90%;
    margin-top: 3%;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;

export const SubTitle = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-top: 2%;
    text-align: justify;
`;

export const ContainerLines = styled.View`
    width: 90%;
    flex-direction: row;
    margin-top: 8%;
`;

export const LineLeft = styled.View`
    background-color: #fff;
    height: 2px;
    width: 50%;
`;

export const LineRight = styled.View`
    background-color: #fff;
    opacity: 0.2;
    height: 2px;
    width: 50%;
`;

export const ContainerValues = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-top: 1.5%;
`;

export const TextValue = styled.Text`
    color: #fff;
    font-weight: 500;
`;

export const Button = styled.TouchableOpacity`
    background-color: #fff;
    margin-top: 5%;
    width: 200px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
`;

export const TextButton = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000;
`;

export const ModalBackground = styled.TouchableOpacity`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.View`
    background-color: #fff;
    width: 100%;
    height: 60%;
    padding: 20px;
    border-radius: 10px;
    align-items: center;
`;

export const ImageModal = styled.Image`
    width: 300px;
    height: 300px;
    margin-top: 3%;
`;

export const ButtonModal = styled.TouchableOpacity`
    width: 50%;
    height: 50px;
    background-color: #202020;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    border-radius: 200px;
`;

export const TextButtonModal = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
`;