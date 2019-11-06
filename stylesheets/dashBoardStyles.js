import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        //borderWidth:10,
        //borderColor:'#00a2ff'
    },
    
    header: {
        padding:20,
        textAlign:'center',
        fontSize:25,
    },
    SquareShapeView: {
        marginLeft:'auto',
        marginRight:'auto',
        width: '90%',
        marginTop:40,
    
        //elevation:10,
        //backgroundColor:'#fff'
    },
    button: {
        marginTop:10,
        marginBottom:10,
        marginRight:'auto',
        marginLeft:'auto',
        width: "50%",
        height: 52,
        backgroundColor: '#00a8ff',
        borderRadius: 25
    },
    buttonText:{
        fontSize:24,
        textAlign:'center',
        marginTop:'auto',
        marginBottom:'auto'
    },
    text:{
        fontSize:18,
        textAlign:'center',
        marginTop:50
    },
    logo:{
        width:'30%',
        height:'100%',

    }

});