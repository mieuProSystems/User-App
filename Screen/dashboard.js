import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    TouchableHighlight,
    Image
} from 'react-native';
import {styles} from "../stylesheets/dashBoardStyles";




export default class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render()
    {
        return(
            <ImageBackground  style={styles.container}>
                <View style={{width:'90%', height:'100%'}}>
                
                <View style={{flexDirection:'row', height:'15%', margin:20, marginTop:50, justifyContent:'space-between'}}>
                <Image style={styles.logo}source={require('../res/vidplayIcon.jpg')} />
                <Text style={{fontSize:60, fontStyle:'italic', marginTop:'auto', marginBottom:'auto', color:'#000', fontWeight:'bold'}}>Vid Play</Text>
                </View>  

{/*                 
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                    />  */}
                <View style = {styles.SquareShapeView} >
                    
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => { console.log("clicked"); this.props.navigation.navigate('Login');}}> Sign-In </Text>
                    </TouchableHighlight>
                
                    <Text style={styles.text}> Don't have an account? </Text>

                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => { console.log("clicked"); this.props.navigation.navigate('RegisterEmail');}}> Sign-Up </Text>
                    </TouchableHighlight>

                </View>

                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginTop:50,
                    }}
                    />
                    <View>
                        <Text style={{textAlign:'center', fontSize:16, marginTop:5}}>
                            Or Sign In with Social Networks
                        </Text>

                    </View>

       
                </View>
            </ImageBackground>

        )
    }
}
