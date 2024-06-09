import DropShadow from "react-native-drop-shadow";
import { Container, Input, Link, LinkText, Logo, SubmitButton, SubmitText, inputShadow } from "../styles/SignInStyle";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const SignIn = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(

        <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
        >

            <Logo source={require('../img/logo.png')}/>
        
            <DropShadow style={inputShadow}>
                <Input
                    placeholder="Email"
                    value={email}
                    placeholderTextColor="#fff"
                />
            </DropShadow>
            
            <DropShadow style={inputShadow}>
                <Input 
                    placeholder="Senha"
                    placeholderTextColor="#fff"
                    value={password}
                    secureTextEntry={true}
                />
            </DropShadow>

            
            <SubmitButton activeOpacity={0.7}>
                <SubmitText>
                    Login
                </SubmitText>
            </SubmitButton>

            <Link onPress={navigation.navigate('SignUp')}>
                <LinkText>
                    Criar nova conta
                </LinkText>
            </Link>
            
        
        </Container>

    );
}

export default SignIn;