import { View, Text, Image, Linking, Button } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'

const Detail = ({ route }) => {

    const [item, setItem] = useState([])

    useEffect(() => {
        fetch('https://www.melivecode.com/api/attractions/' + route.params.id)
            .then(res => res.json())
            .then(result => setItem(result.attraction))
    }, [])

    const handleMap = useCallback(async() => {
        await Linking.openURL('https://maps.google.com/maps?q=' + item.latitude + ',' + item.longitude)
    })

    return (
        <View>
            <Image
                style={{ width: '100%', height: 333 }}
                source={{ uri: item.coverimage }}
            />
            <Text style={{ fontSize: 20, padding: 5 }}>{ item.name }</Text>
            <Text style={{ padding: 5 }}>{ item.detail }</Text>
            <Button title='Map' onPress={handleMap} />
        </View>
    )
}

export default Detail