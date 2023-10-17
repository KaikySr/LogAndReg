import { View, Button, StyleSheet, TextInput, Text } from "react-native";

export default function Login(props)
{
    return(
        <View name="tela" style={styles.main}>
            <View name="cardLogin" style={styles.cardLogin}>
                <Text style={styles.loginTxt}>Login</Text>
               
                <View name="inputs" style={styles.inputs}>
                    <TextInput type="email" placeholder="E-mail" style={styles.input}/>
                    <TextInput secureTextEntry placeholder="Senha" style={styles.input}/>
                </View>

                <View name="buttons" style={styles.buttons}>
                    <View name="button" >
                        <Button onPress={() => props.navigation.navigate('Usuario')} title="Login"/>
                    </View>

                    <View name="button" >
                        <Button onPress={() => props.navigation.navigate('Cadastro')} title="Cadastrar"/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    cardLogin: {
        width: '90%',
        height: '90%',
        backgroundColor: 'white-smoke',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: '5rem'
    },

    loginTxt: {
        fontSize: '60px',
    },

    inputs: {
        width: '60%',
        height: '10%',
        gap: '10px'
    },

    input: {
        color: 'white',
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        paddingLeft: '10px'
        
    },

    buttons: {
        width: '40%',
        height: '10%',
        gap: '10px'
        
    },

})