import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export function Loader() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0f0f0f" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 16,
    },
});