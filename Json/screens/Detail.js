import { View, Text, Image, StyleSheet, Button, Linking } from 'react-native'
import React, {useCallback} from 'react'
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

const Detail = ({ route, navigation }) => {

    let d = data.find(o => o.id == route.params.id)

    const handleMap = useCallback(async () => {
        await Linking.openURL('https://maps.google.com/maps?q=' + d.latitude + ',' + d.longitude)
    })

    return (
        <View style={styles.coverImage}>
            <Image
                style={styles.coverImage}
                source={{ uri: d.coverimage }}
            />
            <View style={styles.textBox}>
                <Text style={{ fontSize: 20 }}>{ d.name } </Text>
                <Text>{ d.detail }</Text>
            </View>
            <Button title='Map' onPress={handleMap} />
        </View>
    )
}

export default Detail