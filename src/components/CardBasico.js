import { StyleSheet, View, Text } from 'react-native';

export default function CardBasico() {
  return (
    <View style={style.card}>
      <Text style={style.titulo}>Titulo del card</Text>
      <Text style={style.contenido}>Contenido del card</Text>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',     
    elevation: 4,
    shadowOpacity: 0.5,       
    shadowRadius: 4,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  contenido: {
    marginTop: 4,
    textAlign:'justify',
    fontSize: 14,
    color: '#333',
  },
});
