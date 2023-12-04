import React from "react";
import { ScrollView } from 'react-native';
import { 
    Container,
    ContainerTexts,
    FontNew,
    TitleNew,
    DateNew,
    ImageNew,
    TextNew,
} from "./styles";
import { format } from 'date-fns';

export default function NewsDetailScreen({ route }) {
    const { newsItem } = route.params;

    const formattedDate = format(new Date(newsItem.date), 'dd/MM/yyyy');
    const uppercaseSource = newsItem.source.toUpperCase();
    

    return (
        <ScrollView>
            <Container>
                <ContainerTexts>
                    <FontNew>{uppercaseSource}</FontNew>
                    <TitleNew>{newsItem.title}</TitleNew>
                    <DateNew>{formattedDate}</DateNew>
                </ContainerTexts>
                
                <ImageNew source={{ uri: `http://192.168.0.105:4000/${newsItem.imagePath}` }}/>
                
                <ContainerTexts>
                    <TextNew>{newsItem.text}</TextNew>
                </ContainerTexts>
            </Container>
        </ScrollView>
    );
}
