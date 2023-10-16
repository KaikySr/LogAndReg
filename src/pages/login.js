import { View, Button  } from "react-native-web";

export default function Login(props)
{
    return(
        <>
            <View>oie</View>

            <Button
                onPress={() => props.navigation.navigate('Cadastro')}
                title="Cadastrar">
                <Text>Cadastrar</Text>
            </Button>
        </>
    )
}

