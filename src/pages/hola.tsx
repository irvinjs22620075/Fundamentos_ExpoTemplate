
import {SafeAreaView,StyleSheet,Text } from 'react-native';

function App() {
  

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hola Mundo </Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;