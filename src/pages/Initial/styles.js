import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const DivLogo = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    width: 100px;
    height: 100px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const Logo = styled.Image`
    width: 60px;
    height: 60px;
`;

export const Title = styled.Text`
    margin-top: 5%;
    font-size: 40px;
    font-weight: bold;
    color: #000;
`;

export const SubTitle = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #000;
    text-align: center;
    width: 80%;
`;

export const Text = styled.Text`
    margin-top: 5%;
    font-size: 22px;
    font-weight: 400;
    color: #000;
    text-align: justify;
    margin-left: 2%;
    margin-right: 2%;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 8%;
    background-color: #000;
    width: 60px;
    height: 60px;
    border-radius: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;