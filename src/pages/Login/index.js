import React from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home';


export default function Login(navigation) {

    
    return (
      <KeyboardAvoidingView>

         <View>
            <Text>Faça seu Login</Text>
            <TextInput
               placeholder="Email"
               autoCorrect={false}
               onChangeText={()=> {}}
            />
        
            <TextInput
               placeholder="Senha"
               autoCorrect={false}
               onChangeText={()=> {}}
            />

            <TouchableOpacity>
               <Text>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text>Crie sua conta</Text>
            </TouchableOpacity>

    
          </View>         
        </KeyboardAvoidingView>
    );
}
