import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '../../screens';

const AuthStack = createNativeStackNavigator();

const Auth: React.FC = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={'Splash'}>
            <AuthStack.Screen name={'Splash'} component={Splash} />
        </AuthStack.Navigator>
    );
};

export default Auth;