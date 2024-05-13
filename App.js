import React from 'react';
import { StyleSheet} from 'react-native';
import UserForm from './componentes/UserForm';
import UserList from './componentes/UserList';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Icon } from '@rneui/themed';
import UsersContext from './componentes/UserContext';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <UsersProvider>
        <NavigationContainer style={styles.container}>
        <Stack.Navigator
          initialRouteName='UserList'
          screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({ navigation }) => {
              return {
                title: 'Lista de Usuários',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    type='clear' // pode ser solid ou outline, nesse caso é sem fundo
                    icon={<Icon name="add" size={25} color="white" />} />
                )
              }
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: 'Formulário de Usuários'
            }}
          />
        </Stack.Navigator>
        </NavigationContainer>
      </UsersProvider>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}
const styles = StyleSheet.create({ 
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  }
})