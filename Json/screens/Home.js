import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import data from './attractions.json'

const styles = StyleSheet.create({
    coverImage: {
        width: '100%',
        height: 300,
    },
    textBox: {
        margin: 10
    }
})

const Home = ({ navigation }) => {

    const pressDetail = (id) => {
        navigation.navigate('Detail', { id: id })
    }

    return (
        <SafeAreaView>
            <ScrollView>
                {data.map(d => (
                    <View key={d.id} style={{ marginBottom: 10 }}>
                        <Pressable onPress={() => pressDetail(d.id)}>
                            <Image
                                style={styles.coverImage}
                                source={{ uri: d.coverimage }}
                            />
                            <View style={styles.textBox}>
                                <Text style={{ fontSize: 20 }}>{d.name}</Text>
                                <Text>{d.detail}</Text>
                            </View>
                        </Pressable>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home