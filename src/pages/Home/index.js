import React, { useState, useEffect, useCallback } from "react";
import { RefreshControl, FlatList, TouchableOpacity } from 'react-native';
import { 
    Container, 
    Title,
    ContainerNews,
    TextContainer,
    TitleContainer,
    FontDateContainer,
    ImageNews,
    TitleNews,
    FontNews,
    DateNews
} from "./styles";
import MoreVertical from "../../components/MoreVertical";
import api from "../../services/api"; 
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

export default function Home(){
    const [news, setNews] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation();

    const fetchData = useCallback(() => {
        api.get('/posts')
            .then(response => {
                const reversedData = response.data.reverse();
                setNews(reversedData);
                setRefreshing(false);
            })
            .catch(error => {
                console.error('Erro ao buscar as notícias:', error);
                setRefreshing(false);
            });
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const renderItem = ({ item }) => {
        const truncatedTitle = item.title.length > 60 ? `${item.title.substring(0, 60)}...` : item.title;
        const sourceText = item.source.toUpperCase(); 
    
        return (
            <TouchableOpacity onPress={() => navigation.navigate('NewsDetailScreen', { newsItem: item })}>
                <ContainerNews>
                    <ImageNews source={{ uri: `${api.defaults.baseURL}/${item.imagePath}` }}/>
                    <TextContainer>
                        <TitleContainer>
                            <TitleNews>{truncatedTitle}</TitleNews>
                        </TitleContainer>
                        <FontDateContainer>
                            <FontNews>{sourceText}</FontNews>
                            <DateNews>
                                {format(new Date(item.date), 'dd/MM/yyyy')}
                            </DateNews>
                        </FontDateContainer>
                    </TextContainer>
                </ContainerNews>
            </TouchableOpacity>
        );
    };

    return(
        <Container>
            <MoreVertical/>
            <Title>Latest News</Title>
            <FlatList
                data={news}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </Container>
    )
}
