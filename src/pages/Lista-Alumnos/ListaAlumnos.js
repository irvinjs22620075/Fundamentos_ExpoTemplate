import { StyleSheet, View, Platform, StatusBar, Text, SafeAreaView, } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

 
 
 export default function ListaAlumnos() {
   return (
   <SafeAreaView style={style.mainS}>
    {/* Inicio de Appbar */}
    <View style={style.appBar}>
    <Icon name ="arrow-left" size={30} color={'#000'} />
    <Text style={style.appBarTitle}>Lista de Usuarios</Text>
    <View style={{width:20}}>

    </View>
    </View>
    {/* Cierre de Appbar */}
   </SafeAreaView>
   )
 }
 const style = StyleSheet.create({
     mainS: {
         flex: 1,
         backgroundColor: '#ffffffff',
         paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        //  padding: 16,
     },
     appBar:{
        height:50,
        width:'100%',
        backgroundColor:'#7bbd94ff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:16,
     },
     appBarTitle:{
        fontWeight:'bold',
        fontSize:16,
     },

    });