
import { SafeAreaView, StyleSheet, View, Button, Text, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Botones() {
    return (
        <View style={style.mainS}>
            {/*  */}
            <Text style={style.h1} >Botones</Text>
        {/* Boton 1 */}
            <TouchableOpacity style={style.botonBasico}>
                <Text style={style.text}>Boton 1</Text>
            </TouchableOpacity>
            {/* Boton 2 */}
            <TouchableOpacity style={style.botonBasico}>
                <Icon name="person" size={(20)} style={style.iconb}/>
                <Text style={style.text}>Boton Icono</Text>
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
    h1: {
        fontSize: 25,
        fontWeight: 'bold',

    },
    botonBasico: {
        backgroundColor: '#fff',
        fontSize:30,
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',

    },
    iconb:{
        color:'#ca1010ff',
        
    }
})


