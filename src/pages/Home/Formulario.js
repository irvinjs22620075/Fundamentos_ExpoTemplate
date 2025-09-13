
import { StyleSheet, View, Text, Platform, StatusBar, SafeAreaView, TextInput } from 'react-native';

export default function Formulario() {
    return (

        <SafeAreaView style={style.mainS}>
            <Text style={style.label}>Nombre</Text>
            <TextInput style={style.input} placeholder="Escribe tu nombre" />
            <Text style={style.label}>Descripcion</Text>
            <TextInput multiline={true} numberOfLines={4} style={[style.input, style.textArea]} placeholder="Escribe tu personalidad" />
            <Text style={style.label}>Correo Electronico</Text>
            <TextInput style={style.input} placeholder="Ingrese el correo" keyboardType='email-address' />
            <Text style={style.label}>Contraseña</Text>
            <TextInput style={style.input} placeholder="*******" secureTextEntry={true} />
            <Text style={style.label}>Telefono</Text>
            <TextInput style={style.input} placeholder="123456" keyboardType='pphone-pad' />
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
    textArea:{
       height:100,
       textAlignVertical:'top',

    }

});