import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Produtos from '../../components/Produtos';
import Login from '../Login';

export default function Home() {
   const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View> 
               <Text style={styles.header}> Full Stack Eletro </Text>
                           

            <View style={styles.textContainer}>
                <Text style={styles.text}>Página Inicial</Text>

                <TouchableOpacity>
                <View>
                  <Login />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position: 'absolute',right: 0, alignSelf: 'center'}}>
                    <MaterialIcons
                      name="filter-list"
                      size={24}
                      color="#000"
                    />
                </TouchableOpacity>
            </View>
            </View>


            <View styles={styles.line} />

            <ScrollView>
               <Text style={styles.text}>Produtos</Text>

               <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                   <Produtos img ={require('../../assets/FogaoAtlas.png')} cost="R$500,00" onClick={()=> navigation.navigate('Detail')}>
                       Fogão Atlas Padrão 4 bocas cor preto
                   </Produtos>                   
                    <Produtos img ={require('../../assets/FogaoBrastemp.png')} cost="R$1.679,90" onClick={()=> navigation.navigate('Detail')}>
                      Fogão Brastemp 5 bocas com botões removíveis e aro proteto-Inox
                   </Produtos>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                   <Produtos img ={require('../../assets/FogaoConsul.png')} cost="R$1.299,90" onClick={()=> alert('CLICOU')}>
                       Fogão Consul 5 bocas,Forno limpa fácil-Branco
                   </Produtos>  

                   <Produtos img ={require('../../assets/LavadoraBrastemp.png')} cost="R$2.399,90" onClick={()=> alert('CLICOU')}>
                      Lavadora de Roupas Brastemp 15kg-Titânio
                   </Produtos>  
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                   <Produtos img ={require('../../assets/LavadoraPhilco.png')} cost="R$3.299,90" onClick={()=> alert('CLICOU')}>
                      Lavadora de Roupas Philco Inverter 12KG-Branca
                   </Produtos>  

                   <Produtos img ={require('../../assets/LavaloucaBrastemp.png')} cost="R$1.799,90" onClick={()=> alert('CLICOU')}>
                      Lava-louça Brastemp,Compacta 8 serviços-Branca
                   </Produtos>  
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                   <Produtos img ={require('../../assets/LavaloucaElectrolux.png')} cost="R$4.8949,90" onClick={()=> alert('CLICOU')}>
                      Lava-louça Electrolux,14 serviços-Inox
                   </Produtos>  

                   <Produtos img ={require('../../assets/MicroondasElectrolux.png')} cost="R$1.799,90" onClick={()=> alert('CLICOU')}>
                      Lava-louça Brastemp,Compacta 8 serviços-Branca
                   </Produtos>  
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                   <Produtos img ={require('../../assets/MicroondasPhilco.png')} cost="R$3.299,90" onClick={()=> alert('CLICOU')}>
                    Lavadora de Roupas Philco Inverter 12KG-Branca
                   </Produtos>  

                   <Produtos img ={require('../../assets/RefrigeradorDuplex.png')} cost="R$3.419,90" onClick={()=> alert('CLICOU')}>
                   Refrigerador Duplex 462 litros Turbo Control Frost Free Inox – BRM56AKBNA
                   </Produtos>  
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                   <Produtos img ={require('../../assets/RefrigeradorElectrolux.png')} cost="R$3.540,00" onClick={()=> alert('CLICOU')}>
                      Refrigerador Electrolux, 474l, Branco, Df56
                   </Produtos>  

                   <Produtos img ={require('../../assets/Refrigerador.png')} cost="R$4.520,00" onClick={()=> alert('CLICOU')}>
                      Refrigerador Inverse Bottom 539 litros Frost Free Inox – BRS75BRANA
                   </Produtos>  
                </View>


            </ScrollView>

        </View>

       

    );
}

 const styles = StyleSheet.create({
     container:{
        flex:1,
        width:'100%',
        backgroundColor:"#fff"
     },
     header:{
         fontSize: 50,
         marginBottom: 8,
         backgroundColor: '#f0f0',
         fontFamily: 'Anton_400Regular',
     },

     image:{
         width: '100%'
     },
     textContainer:{
         flexDirection: 'row',
         marginVertical: '5%',
         marginHorizontal: '5%'
     },
     text:{
      fontFamily: 'Anton_400Regular',
      fontSize: 26,
      marginHorizontal: '1%'
     },
     line:{
         borderBottomColor: '#d8d8d8',
         borderBottomWidth: 2

     }


 });