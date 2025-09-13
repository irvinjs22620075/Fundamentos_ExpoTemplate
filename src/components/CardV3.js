import { StyleSheet, View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function CardV3() {
    return (
        
        <View style={style.card}>
            <Image style={style.img} source={{ uri: 'https://wallpapers.com/images/featured/imagenes-de-ciudad-anime-8myeyo440aletx78.jpg' }} />
            <View style={style.card_contenido}>
                <Text style={style.titulo}>Titulo del card</Text>
                <Text style={style.contenido}>Contenido del card</Text>
                <TouchableOpacity style={style.botonSombreado}>
                    <Icon name="send" size={23} color={'#fff'} style={style.sombra} />
                    <Text style={style.textoBoton}>Sombra</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        // padding: 16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 6,
        overflow: 'hidden',
        shadowOffset: { width: 0, height: 3 }
    },
    card_contenido: {
        padding: 16,
        backgroundColor: '#ffffffff',

    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    contenido: {
        marginButton: 12,
        fontSize: 12,

    },

    img: {
        width: '100%',
        height: 180,

    },
    botonSombreado: {
            marginTop: 10,
            backgroundColor: '#817bd4ff',
            paddingVertical: 10,
            paddingHorizontal:18,
            borderRadius: 10,
            marginTop: 10,
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-start',
    
        },
        iconoIzquierda: {
            marginRight: 10,
        },
         sombra: {
        ...Platform.select({
            android: {
                elevation: 6,
            },
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 4,
            },
        }),
    },
    textoBoton: {
        fontWeight: 'bold',
        fontSize:14,
    }


});
