
import { StyleSheet, View, Text, Platform, StatusBar, SafeAreaView, TextInput } from 'react-native';

export default function Formulario() {
    return (

        <SafeAreaView style={style.mainS}>
            <Text style={style.label}>Nombre</Text>
            <TextInput style={style.input} placeholder="Escribe tu nombre" />
            <Text style={style.label}>Descripcion</Text>
            <TextInput style={[style.input, style.textArea]} placeholder="Escribe tu personalidad" />
        </SafeAreaView>

    );
}
const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#d8cad3ff',
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
        borderColor: '#fff',
        borderRadius: 10,
        backgroundColor: '#fff',

    },
    textArea:{
       height:100,
       textAlignVertical:'top',
        
    }

});