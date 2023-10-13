import { StyleSheet, Text, View } from 'react-native';
import ShowCount from './src/components/ShowCount/ShowCount';

export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <ShowCount/>
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

  title: {
    fontSize: 30,
  }
});
