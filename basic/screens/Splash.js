import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const Splash = ({ navigation }) => {

    const onPress = () => {
        navigation.navigate('Home')
    }

    return (
        <Pressable onPress={onPress}>
            <View style={{ height: "100%", alignItems: "center", backgroundColor: "#131414" }}>
                <View style={{ flex: 0.95, justifyContent: "center" }}>
                    <Image source={require("../assets/logo.png")} style={{ width: 150, height: 150 }} />
                </View>
                <View style={{ flex: 0.05 }}>
                    <Text style={{ color: "white" }}>chawanchot.dev</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default Splash;
