import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import Button from '../../components/Button';

export default function Detail({navigation}) {
     navigation.setOptions({
         headerTitle: 'Fogão Atlas'
     })

    return (
        <ScrollView style={styles.container}>
            <Image 
              source={require('../../assets/FogaoAtlas.png')}
              style={styles.image}
              resizeMode="cover"
            />

            <View>
                <View> 
                    <Text style={[styles.title, { fontSize: 24 }]}> Fogão Atlas</Text>
                </View>
                <View opacity={0.4}> 
                    <Text style={[styles.title, { fontSize: 30 }]}>R$500</Text>
                </View>

                <View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                        Fogão Altas Padrão, 4 bocas, cor preto
                    </Text>
                </View>

                <Button />

                <View style={styles.line} />

            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    image:{
        width: '100%'
    },
    title:{
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%'
    },
    textContent:{
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle:{
        fontSize:22,
        lineHeight: 25
    },
    line:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%'
    }
});
