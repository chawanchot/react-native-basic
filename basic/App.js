import React from 'react';
import Splash from './screens/Splash';
import Home from './screens/Home'
import Detail from './screens/Detail'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Splash' 
                    component={Splash} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name='Home' 
                    component={Home} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name='Detail' 
                    component={Detail} 
                    options={{ title: 'Detail' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
