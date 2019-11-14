import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight,
    TextInput,
    View
} from 'react-native';

import { styles } from '../stylesheets/registerFormStyles';
import Spinner from 'react-native-loading-spinner-overlay';
import IpAddress from '../Components/serverip';



class RegisterEmail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            spinner: false,
        }
    }

    // Validate Email for new user
    validateEmail = async() => {
        if( (this.state.email.length) === 0 ) {
            alert("Please Enter the E-mail")
        }
        else {
            let reg = /\S+@\S+\.\S+/;
            if (reg.test(this.state.email) === false) {
                alert(" Invalid Email Format\n Valid Format :: name@company.com");
            }
            else {
                this.setState({spinner: true})
                fetch(IpAddress+'/user/verify/email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "email": this.state.email,
                    })
                })
                    .then((response) => (response.json()))
                    .then((responsejson) => {
                        //alert(JSON.stringify(responsejson));
                        this.setState({spinner: false});
                        if ((responsejson.status) === "failure") {
                            alert("Email address already Exist");
                        } else {
                            this.props.navigation.navigate('RegisterUsername', {
                                EMAIL: this.state.email,
                            });
                        }

                    })
                    .catch((error) => {
                            this.setState({spinner: false});
                            alert(error);
                        }
                    )
            }
        }
    };

    
    static navigationOptions = {  
        title: 'Sign Up',  
        headerStyle: {  
            backgroundColor: '#00a2ff',
              },  
        headerTitleStyle: {   
            fontSize:24,
            color:'#000' 
        },  
    };

    render() {
        return(
            <View style={styles.container}>
                <View style={{width:'90%', marginTop:50}}>
                     <Spinner
                    visible={this.state.spinner}
                    />
                <Text style={styles.header}> Enter your e-mail </Text>
                <TextInput style={styles.inputBox}
                           onChangeText={(email) => this.setState({email})}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           textContentType={"emailAddress"}
                           placeholder="Email"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType={"email-address"}
                           maxLength = {256}
                            />
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.validateEmail}> Next </Text>
                </TouchableHighlight>

                </View>
            </View>
        )
    }
}

export default RegisterEmail;