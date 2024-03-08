import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App';
import Auth from './Auth';

const AppStack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name={'Auth'} component={Auth} />
                <AppStack.Screen name={'App'} component={App} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;