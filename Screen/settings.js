import React,{ Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

class Settings extends Component {
    static navigationOptions = {
        title: 'SettingsScreen',
    };

    render() {
        return (
            <ScrollView>
                <Text style={styles.textFirst}> MY SETTINGS </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textFirst: {
        fontSize: 50,
        fontWeight:'bold',
        textAlign:'center',
        marginTop: 300,
    },
});

export default Settings;
