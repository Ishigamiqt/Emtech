import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Solar Boys</Text>
      <Text style={styles.name}>Marlon Jason Ejercito</Text>
      <Text style={styles.name}>Christian Andrei Garcia</Text>
      <Text style={styles.name}>Jaison Martin Zapanta</Text>
      <Button title = "Tap me!"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    marginTop: 10,
  }
});
