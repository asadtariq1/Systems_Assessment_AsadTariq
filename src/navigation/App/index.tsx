import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Search, Feedback } from '../../screens';

const AppStack = createNativeStackNavigator();

const App = () => {
    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={'Home'}>
            <AppStack.Screen name={'Home'} component={Home} />
            <AppStack.Screen name={'Search'} component={Search} />
            <AppStack.Screen name={'Feedback'} component={Feedback} />
        </AppStack.Navigator>
    );
};

export default App;