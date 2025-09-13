
import { SafeAreaView, StyleSheet, View, Button, Text, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function BotonesV2() {
    return (
        <View style={style.mainS}>
            <Text style={style.title}>Botones Personalizados</Text>
            {/*Boton grande  */}
            <TouchableOpacity style={style.botonGrande}>
                <Text style={style.textoBoton}>Boton Grande</Text>
            </TouchableOpacity>
            {/*Boton grande con icono  */}
            <TouchableOpacity style={style.botonConIcono}>
                <Icon name="send" size={23} color={'#fff'} style={style.iconoIzquierda} />
                <Text style={style.textoBoton}>Boton Grande</Text>
            </TouchableOpacity>
            {/*Boton grande con sombra  */}
            <TouchableOpacity style={style.botonSombreado}>
                <Icon name="send" size={23} color={'#fff'} style={style.sombra} />
                <Text style={style.textoBoton}>Sombra</Text>
            </TouchableOpacity>
            

        </View>
    );
}
const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#a6d8ebff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 16,
        textAlign: 'center',
    },
    textoBoton: {
        color: '#000000ff',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',


    },
    botonGrande: {
        backgroundColor: '#e7bfbfff',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        alignSelf: 'center',
    },
    botonConIcono: {
        backgroundColor: '#e5a0dcff',
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        alignSelf: 'center',

    },
    iconoIzquierda: {
        marginRight: 10,
    },
    botonSombreado: {
        marginTop: 10,
        backgroundColor: '#817bd4ff',
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',

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

})


