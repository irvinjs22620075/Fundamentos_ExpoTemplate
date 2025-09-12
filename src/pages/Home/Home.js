import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Button, Image } from 'react-native';


export default function Home() {
  return (
    < SafeAreaView style={styles.container}>
      <Image style={{width:150, height:150, borderRadius:80,}} source={{uri:'https://img.freepik.com/premium-vector/anime-cartoon-character-vector-illustration_648489-34.jpg?w=2000'}} />
      
      <Text style={styles.h1}>Bienvenidosss</Text>
      <Text style={styles.h2}>A la clase de parrafos</Text>
      <Text style={styles.h3}>de la materia de desarrollo de applicaciones moviles</Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6bff8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Holamundo: {
    fontSize: 25,
    fontWeight: 'bold',
    borderRadius: 30,
    backgroundColor: '#fff',
    padding: 10,
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',

  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 15,
    fontWeight: 'bold',
  }

});
