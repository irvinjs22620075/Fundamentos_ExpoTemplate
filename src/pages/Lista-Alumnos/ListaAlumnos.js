import { StyleSheet, View, Platform, StatusBar, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';



export default function ListaAlumnos() {
   return (
      <SafeAreaView style={style.mainS}>
         {/* Inicio de Appbar */}
         <View style={style.appBar}>
            <Icon name="arrow-left" size={30} color={'#000'} />
            <Text style={style.appBarTitle}>Lista de Usuarios</Text>
            <View style={{ width: 20 }}></View>

         </View>
         {/* Cierre de Appbar */}
         {/* Inicio de contenido lista de alumnos */}
         <ScrollView style={{padding:14}}>
            <Text style={style.sectionTitle}>Alumnos de Aplicaciones Moviles</Text>
            
            { [1,2,3,4,5,6,7].map(( )=> (
               <View style={style.card}>
               <Image style={style.avatar} source={{ uri: 'https://img.freepik.com/premium-vector/anime-cartoon-character-vector-illustration_648489-34.jpg?w=2000' }} />
               <View style={style.cadInfo}>
                  <Text style={style.userName}>Irvin Jimenez</Text>
                  <Text style={style.userDetails}>Ing. en Sistemas computacionales</Text>
                  <TouchableOpacity style={style.saveButton}>
                     <Text style={style.saveButtonText}>Ver mas</Text>
                  </TouchableOpacity>
               </View>
            </View>
            ))}
            
         </ScrollView>
         {/* Cierre de lista de alumnos */}
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
   appBar: {
      height: 50,
      width: '100%',
      backgroundColor: '#7bbd94ff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
   },
   appBarTitle: {
      fontWeight: 'bold',
      fontSize: 20,
   },
   sectionTitle:{
      padding:16,
      fontSize:14,
      fontWeight:'bold',
   },
   card:{
      padding:16,
      flexDirection:'row',
      borderRadius:16,
      backgroundColor:'#fff',
      elevation:2,
      margin:5,
   },
   avatar:{
      width: 70,
        height: 70,
        borderRadius:50,
        marginBotton: 28,
        marginRight:12,
        
   },
   cardInfo:{
      flex:1,
      justifyContent:'center',
   },
   userName:{
       
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
   },
   userDetails:{
  
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
      
   },
   saveButton:{
      backgroundColor: '#1e56aaff',
        marginTop: 10,
        padding:10,
        alignSelf:'flex-start',
        paddingVertical: 6,
        borderRadius: 15,
        
   },
   saveButtonText:{
      color: '#ffffffff',
        fontWeight: 'bold',
   },

});