import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
        width: '100%',
        height: '100%'
    },
    inputBox: {
        margin:10,
        backgroundColor: '#ccc',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000',
    },
    button: {
        margin:10,
        backgroundColor: '#00a2ff',
        borderRadius: 25,
        padding:10
        
    },
    text:{
        textAlign:'right',
        fontSize:16,
        fontWeight:'bold',
        marginRight:10
    },
    buttonText: {
        fontSize: 24,
        color: '#000',
        textAlign: 'center',
        marginBottom:'auto',
        marginTop:'auto'
    }
});