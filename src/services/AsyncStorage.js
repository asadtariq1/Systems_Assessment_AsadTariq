import AsyncStorage from '@react-native-async-storage/async-storage';

export async function _storeData(key, value) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log('Storage error: ' + error);
    }
}

export async function _storeMultipleData(key, value) {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        console.log('Error in storing multiple data: ' + error);
    }
}

export async function _retrieveData(key) {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (error) {
        console.log('Error in retrieving: ' + error);
    }
}

export async function _retrieveMultipleData(key) {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.log('Error in retrieving: ' + error);
    }
}

export async function _removeItem(key) {
    try {
        await AsyncStorage.removeItem(key);
        console.log('Remove');
        return true;
    } catch (exception) {
        return false;
    }
}

export async function _removeAll() {
    await AsyncStorage.clear();
}