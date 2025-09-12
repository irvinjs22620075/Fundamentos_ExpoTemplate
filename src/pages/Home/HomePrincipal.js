
import { StyleSheet, View, Text, Platform, StatusBar } from 'react-native';
import CardBasico from '../../components/CardBasico';   
import CardImg from '../../components/CardImg';

export default function HomePrincipal() {
    return (
        <View style={style.mainS}>
          <Text style={style.title}>Pagina Principal</Text> 
          <CardBasico/>
          <CardImg/>
        </View>
    );
}
const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#7a69daff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 16,
        textAlign: 'center',
    },
})


