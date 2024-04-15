import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Linking, TouchableOpacity } from 'react-native';

export default function App() {

  const paises = ["Argentina", "Brasil", "Colombia", "Venezuela", "Peru", "Chile", "Uruguay", "Ecuador", "Bolivia", "Paraguay"];

  const handleSearch = (pais) => {
    const url = `https://www.google.com/search?q=${pais}`;
    Linking.openURL(url)
      .catch(err => console.error('Error', err));
  }

  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <FlatList
        data={paises}
        renderItem={({ item }) => <TouchableOpacity onPress={() => handleSearch(item)}><Text>{item}</Text></TouchableOpacity>}
      />
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
    marginTop: 350
  },
});
