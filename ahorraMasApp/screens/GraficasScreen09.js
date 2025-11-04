import React from "react";
import { View, Text, Image,  StyleSheet, ScrollView } from "react-native";
//import {Ionicosn} from '@expo/vector-icons';

export default function GraficasScreen09(){
    const data = [
        { categoria: 'comida',
          porcentaje: 30.77,

        },
        { categoria: 'transporte',
          porcentaje: 15.38,
          
        },
         { categoria: 'Entretenimiento',
          porcentaje: 11.54,
           
        },
         { categoria: 'Salud',
          porcentaje: 7.69,  
        },
        { categoria: 'Educacion',
          porcentaje: 34.62,
        },


    ];
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>REPORTES </Text>

            <Text style={styles.subtitle}>Reporte de Gastos</Text>

            <Image 
            source={require('../assets/grafica.png')} 
            style={styles.imagenGrafica}
            resizeMode="contain"
            />

        {data.map((item, index) => (
        <View style={styles.card} key={index}>
           <Text style={styles.cardText}>{item.categoria}</Text>
           <Text style={styles.cardText}>{item.porcentaje.toFixed(2)} %</Text>
        </View>
      ))}
      </ScrollView>
    );
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
    },

    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#040a04ff',
        marginLeft: 10,
    },

    subtitle: {
        fontSize: 16,
        color: '#090505ff',
        marginBottom: 10,
    },
    imagenGrafica: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 10,   
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
     

    },
   textoPorcentaje: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
}
});