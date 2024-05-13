import React, {useContext, useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import UsersContext from "./UserContext";

export default ({route, navigation}) => {
    //console.warn(Object.keys(route.params))
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    return (
        <View style={style.form}>
            <TextInput
                style={style.input}
                //pega todos os atributos do user e sobreescreve nome
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o nome"
                value={user.name}
            />

            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack() //desempilha
                }}
            />
        </View>
    )
}
const style = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5
    },
    form: {
        padding: 15
    }
})