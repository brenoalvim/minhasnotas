import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Sobre extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
            <Text style={styles.title}>
            Sobre
            </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',       
   },
   title: {
       fontSize: 20,
       textAlign: 'center',
       margin: 10,

   }
});