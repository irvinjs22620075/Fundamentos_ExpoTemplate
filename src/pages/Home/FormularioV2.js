
import { StyleSheet, View, Text, Platform, StatusBar, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width}= Dimensions.get('window');
export default function FormularioV2() {
    return (

        <SafeAreaView style={style.mainS}>
            <ScrollView>
           <Text style={style.title}>Formulario V2</Text>
           <View style={style.container}>
           <Image style={{width:150, height:150, borderRadius:80,}} source={{uri:'https://img.freepik.com/premium-vector/anime-cartoon-character-vector-illustration_648489-34.jpg?w=2000'}} />
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
    container:{
        width:'100%',
        backgroundColor:'#fff',
        borderRadius:15,
        padding:20,
        alignItems:'center',
        shadowColor:'#000',
        shadowOpacity:0.05,
        shadowOffset:{width:0,height:0},
        shadowRadius:10,
        elevation:5,

    },
    avatar:{
        width: width * 0.35,
        height: width * 0.35,
        borderRadius: (width * 0.35) / 2,
        marginBotton:28,
        borderWidth:2,
        borderColor:'#000',
    },
    
});