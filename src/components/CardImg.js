import { StyleSheet, View, Text, Image } from 'react-native';

export default function CardImg() {
  return (
    <View style={style.card}>
        <Image style={style.img} source={{uri:'https://wallpapers.com/images/featured/imagenes-de-ciudad-anime-8myeyo440aletx78.jpg'}} />
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

img:{
    width:'100%',
    height: 150,

}
});
