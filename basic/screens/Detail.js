import { View, Text, Image } from 'react-native'
import React from 'react'

const images = {
    1: require('../assets/attractions/1.jpg'),
    2: require('../assets/attractions/2.jpg'),
    3: require('../assets/attractions/3.jpg'),
}

const Detail = ({ navigation, route }) => {
    return (
        <View>
            <Image
                source={images[route.params.id]}
                style={{ width: '100%', height: 333 }}
            />
            <Text style={{ fontSize: 25, marginTop: 10, padding: 10 }}>
                { route.params.name }
            </Text>
        </View>
    )
}

export default Detail