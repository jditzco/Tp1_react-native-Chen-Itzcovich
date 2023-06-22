import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Carta from './Components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/central_perk_logo.jpeg')} style={styles.imagen}/>
      <Text> <h5> Try some of our most popular flavors </h5></Text>
      <br/>
      <Carta/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen:{
    width: '80%',
    height: '20%',
    resizeMode: 'contain',
  }
});
