
import { StyleSheet, View, Text, Platform, StatusBar, ScrollView } from 'react-native';
import CardBasico from '../../components/CardBasico';   
import CardImg from '../../components/CardImg';
import CardV2 from '../../components/CardV2';
import CardV3 from '../../components/CardV3';

export default function HomePrincipal() {
    return (
        <ScrollView>
        <View style={style.mainS}>
          <Text style={style.title}>Pagina Principal</Text> 
          <CardBasico/>
          <CardImg/>
          <CardV2/>
          <CardV3/>
        </View>
        </ScrollView>
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


