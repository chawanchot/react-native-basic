import { Text, SafeAreaView, ScrollView, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

const Home = ({ navigation }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://www.melivecode.com/api/attractions')
            .then(res => res.json())
            .then(result => setItems(result))
    }, [])

    const onPressDetail = (id) => {
        navigation.navigate('Detail', { id: id })
    }

    return (
        <SafeAreaView>
            <ScrollView>
                { items.map(data => (
                    <Pressable key={data.id} onPress={() => onPressDetail(data.id)}>
                        <Image
                            style={{ width: '100%', height: 333 }}
                            source={{ uri: data.coverimage }}
                        />
                        <Text style={{ fontSize: 20, padding: 5 }}>{ data.name }</Text>
                        <Text style={{ padding: 5, paddingBottom: 20 }}>
                            { data.detail }
                        </Text>
                    </Pressable>
                )) }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home