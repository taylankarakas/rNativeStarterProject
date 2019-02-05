import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.viewStyle} >
                <Text style={styles.textStyle} >First Project</Text>
            </View>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: Platform.OS === 'android' ? '#ffffff' : '#f8f8f8',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'android' ? 0 : 30,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    }
};
