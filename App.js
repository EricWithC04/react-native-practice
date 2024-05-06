import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Linking, TouchableOpacity, Button, Pressable } from 'react-native';
import PokemonsList from './components/PokemonsList';

export default function App() {

  // const paises = ["Argentina", "Brasil", "Colombia", "Venezuela", "Peru", "Chile", "Uruguay", "Ecuador", "Bolivia", "Paraguay"];
  const Drawer = createDrawerNavigator()

  // const handleSearch = (pais) => {
  //   const url = `https://www.google.com/search?q=${pais}`;
  //   Linking.openURL(url)
  //     .catch(err => console.error('Error', err));
  // }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={AppContent} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Pokemons" component={PokemonsList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const AppContent = () => {

  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
        {/* <FlatList
          data={paises}
          renderItem={({ item }) => <TouchableOpacity onPress={() => handleSearch(item)}><Text>{item}</Text></TouchableOpacity>}
        /> */}
        <Text>El contador es: {counter}</Text>
        <Pressable
          onPress={() => setCounter(counter + 1)}
          style={styles.btn}
        >
          <Text>Aumentar</Text>
        </Pressable>
        <Pressable
          title="Disminuir"
          onPress={() => setCounter(counter - 1)}
          style={styles.btn}
        />
      <StatusBar style="auto" />
    </View>
  )
}

const About = () => {
  return (
    <View style={styles.container}>
      <Text>Esta es una pagina de ejemplo, favor de ignorar</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    marginTop: 20,
    backgroundColor: 'blue',
  }
});
