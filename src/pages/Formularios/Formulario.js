
import { StyleSheet, View, Text, Platform, StatusBar, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Formulario() {
    return (

        <SafeAreaView style={style.mainS}>
            <Text style={style.title}>Registro de Alumno</Text>
            <Text style={style.label}>Nombre</Text>
            <TextInput style={style.input} placeholder="Escribe tu nombre" />
            <Text editable={true} style={style.label}>Carrera</Text>
            <TextInput style={style.input} placeholder="Carrera" />
            <Text style={style.label}>Descripcion</Text>
            <TextInput multiline={true} numberOfLines={4} style={[style.input, style.textArea]} placeholder="Escribe tu personalidad" />
            <Text style={style.label}>Correo Electronico</Text>
            <TextInput style={style.input} placeholder="Ingrese el correo" keyboardType='email-address' />
            <Text style={style.label}>Contraseña</Text>
            <TextInput style={style.input} placeholder="*******" secureTextEntry={true} />
            <Text style={style.label}>Telefono</Text>
            <TextInput style={style.input} placeholder="123456" keyboardType='numeric' />
            <TouchableOpacity style={style.botonConIcono}>
                <Icon name="send" size={23} color={'#fff'} style={style.iconoIzquierda} />
                <Text style={style.textoBoton}>Boton Grande</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
}
const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#ffffffff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 16,
        textAlign: 'center',
    },
    label: {
        fontWeight: 'bold',
        marginTop: 10,
        marginButton: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#6d6d6dff',
        borderRadius: 10,
        backgroundColor: '#fff',

    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',

    },
    botonConIcono: {
        backgroundColor: '#477fd3ff',
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        // alignSelf: 'center',

    },
    iconoIzquierda: {
        marginRight: 10,
    },
    textoBoton: {
        color: '#ffffffff',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',


    },

});