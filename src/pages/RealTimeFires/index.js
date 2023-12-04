import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function RealTimeFires(){
    return (
        <View style={styles.container}>
        <WebView
            source={{ uri: 'https://firms.modaps.eosdis.nasa.gov/map/#d:today;@-57.7,-18.5,3.4z' }} 
            style={styles.webview}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
        marginTop: -50
    },
});

