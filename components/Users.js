import { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'

const styles = StyleSheet.create({
    containerList: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerItem: {
        backgroundColor: '#f2f2f2',
        margin: 3,
        padding: 10,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center'
    },
    userItem: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 2
    }
})

const UserName = ({ item, navigation }) => {

    const handlePress = (item) => {
        navigation.navigate("User", item)
    }

    return (
        <View style={styles.containerItem}>
            <Pressable onPress={() => handlePress(item)}>
                <Text style={styles.pokeItem}>{item.id} - {item.userName}</Text>
            </Pressable>
        </View>
    )
}

const UsersList = ({ navigation }) => {

    const [usersList, setUsersList] = useState([
        { id: 1, userName: "Hermenegildo", password: "12345" },
        { id: 2, userName: "Agapito", password: "12345" },
        { id: 3, userName: "Eleuterio", password: "12345" },
        { id: 4, userName: "Toribio", password: "12345" },
        { id: 5, userName: "Eustaquio", password: "12345" },
    ])

    return (
        <View style={styles.containerList}>
            <Text>Lista de Usuarios</Text>
            <FlatList
                data={usersList}
                renderItem={({ item }) => UserName({ item, navigation })}
            />
        </View>
    )
}

export default UsersList