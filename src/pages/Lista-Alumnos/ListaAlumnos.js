import { StyleSheet, View, Platform, StatusBar, Text} from "react-native";

 
 
 export default function ListaAlumnos() {
   return (
   <View style={style.mainS}>
    <Text>Hola</Text>
   </View>
   );
 }
 const style = StyleSheet.create({
     mainS: {
         flex: 1,
         backgroundColor: '#adccbfff',
         paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
         padding: 16,
     },

    });