import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DivLogo = styled.View`
    background-color: #000;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const Logo = styled.Image`
    width: 60px;
    height: 60px;
`;

export const TextLogin = styled.Text`
    font-size: 30px;
    color: #000;
    margin-top: 2%;
`;

export const ContainerInputs = styled.View`
    width: 90%;
`;

export const TextTypeInput = styled.Text`
    color: #000;
    margin-bottom: 1%;
    margin-left: 1%;
    font-size: 16px;
`;

export const TextInput = styled.TextInput`
    width: 100%;
    height: 60px;
    border-width: 1px;
    border-radius: 10px;
    padding-left: 15px;
    margin-bottom: 20px;
    color: #000;
`;

export const Button = styled.TouchableOpacity`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    height: 60px;
    background-color: #000;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-top: 5%;
`;

export const TextButton = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
`;

export const ContainerSignUp = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 5%;
`;

export const TextSignUp = styled.Text`
    font-size: 16px;
    color: #505050;
`;

export const ClickSignUp = styled.TouchableOpacity``;