
import { StyleSheet, View, Text, Platform, StatusBar, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');
export default function FormularioV2() {
    return (

        <SafeAreaView style={style.mainS}>
              <Text style={style.title}>Formulario V2</Text>
            <ScrollView>
              
                <View style={style.container}>
                    <Image style={{ width: 150, height: 150, borderRadius: 80, }} source={{ uri: 'https://img.freepik.com/premium-vector/anime-cartoon-character-vector-illustration_648489-34.jpg?w=2000' }} />
                    <Text style={style.name}>Irvin Jimenez</Text>
                    <View style={style.Infocontainer}>
                        <Text style={style.label}>Carrera</Text>
                        <Text style={style.info}>Ing. Sistemas Computacionales</Text>
                        <Text style={style.label}>Especialidad</Text>
                        <Text style={style.info}>Desarrollo ded Aplicaciones Moviles</Text>
                        <Text style={style.label}>Correo</Text>
                        <Text style={style.info}>irvin_js@gmail.com</Text>
                        <Text style={style.label}>Telefono</Text>
                        <Text style={style.info}>12345678</Text>
                        <Text style={style.label}>No. Control</Text>
                        <Text style={style.info}>22620000</Text>
                        </View>
                        <TouchableOpacity style={style.botonConIcono}>
                            <Icon name="save" size={23} color={'#fff'} style={style.iconoIzquierda} />
                            <Text style={style.textoBoton}>Guardar</Text>
                        </TouchableOpacity>
                    

                </View>
            </ScrollView>
        </SafeAreaView>

    );
}
const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#adccbfff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 16,
        textAlign: 'center',
    },
    container: {
        width: '100%',
        backgroundColor: '#ffffffff',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        elevation: 5,

    },
    avatar: {
        width: width * 0.35,
        height: width * 0.35,
        borderRadius: (width * 0.35) / 2,
        marginBotton: 28,
        borderWidth: 2,
        borderColor: '#000',
    },
    name: {
        color:'#000',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
        borderRadius:20,
        backgroundColor:'#e48686ff',
        padding:5,

    },
    Infocontainer: {
        width: '100%',
        marginBottom: 10,

    },
    label: {
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 10,
    },
    info: {
        fontSize: 13,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: '#e9e7e7ff',
        padding: 10,
    },
    botonConIcono: {
        backgroundColor: '#477fd3ff',
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 25,
        width: '50%',
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