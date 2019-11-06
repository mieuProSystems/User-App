import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    header: {
        textAlign:'center',
        fontSize:25,
        marginVertical:15,
        //height: 80 // this dose not change the header height
    },
    spinnerTextStyle: {
        color: '#FFF'
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
        backgroundColor: '#00a2ff',
        borderRadius: 25,
        margin:10

    },
    text:{
        textAlign:'center'
    },
    buttonText: {
        fontSize:24,
        marginTop:'auto',
        marginBottom:'auto',
        textAlign:'center',
        padding:10
    },

    TextCont: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row'
    }

});