import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #202020;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 40px;
    width: 50%;
    font-weight: bold;
    margin-left: 5%;
    margin-top: 5%;
`;

export const ContainerNews = styled.View`
    margin-left: 5%;
    margin-top: 10%;
    flex-direction: row;
`;

export const ImageNews = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 10px;
`;

export const TextContainer = styled.View`
    margin-left: 5%;
    flex: 1;
    flex-direction: column; 
`;

export const TitleContainer = styled.View`
    flex-direction: column; 
    width: 100%;
`;

export const FontDateContainer = styled.View`
    flex-direction: row; 
    align-items: center; 
    margin-top: 5%;
`;

export const TitleNews = styled.Text`
    color: #FFF;
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: bold;
    width: 95%;
    text-align: justify;
`;

export const FontNews = styled.Text`
    color: #ff0000;
    margin-right: 10px;
`;

export const DateNews = styled.Text`
    color: #FFF;
    margin-bottom: 3px;
`;