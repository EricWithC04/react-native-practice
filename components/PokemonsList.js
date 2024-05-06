import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const pokemonName = ({ item, index }) => {
    return (
        <View>
            <Text>{index + 1} - {item.name}</Text>
        </View>
    )
}

const PokemonsList = () => {

    const [pokemonsList, setPokemonsList] = useState([{"name": "Buscando..."}])

    const getPokemonsApi = async () => {
        const pokemonsApi = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
        const data = await pokemonsApi.json()

        setPokemonsList(data.results)
    }

    useEffect(() => {
        getPokemonsApi()
    }, [])

  return (
        <View>
            <Text>PokemonsList</Text>
            <FlatList
                data={pokemonsList}
                renderItem={({ item, index }) => pokemonName({ item, index })}
            />
        </View>
    )
}

export default PokemonsList