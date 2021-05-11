import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
            <TouchableOpacity onPress = {() => navigation.navigate('Details')}>
                <Image
                    style={{
                        height: 100,
                        width: 100,  
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    source={require('./dog.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Home

/*import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class Home extends Component {
    render() {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                <Image
                    style={styles.logo}
                    source={require('./dog.png')}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 100,  
        justifyContent: 'center',
        alignItems: 'center',
    },
});*/

/*import React from 'react'
import {View, Button, Text} from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
            <Text>Home View</Text>
            <Button onPress = {() => navigation.navigate('Details')} title='Next Screen'></Button>
        </View>
    )
}

export default Home
*/


