import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Platform } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { appColors } from '../../utils/constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

interface Props {
    onChangeText: (text: string) => void;
    placeholder: string;
    value: string;
    isCross: boolean;
    onPress: () => void;
    onCrossPress: () => void;
}

export const SearchBarTextinput: React.FC<Props> = ({ onChangeText, placeholder, value, onPress, isCross, onCrossPress }) => {
    return (
        <View style={styles.innerContainer}>
            <View style={styles.textinputContainer}>
                {value == null ? (
                    <Text style={[styles.textinputStyle, { color: appColors.placeholderText, marginVertical: responsiveHeight(1.5) }]}>{placeholder}</Text>
                ) : (
                    <TextInput
                        value={value}
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        style={styles.textinputStyle}
                        placeholderTextColor={appColors.placeholderText}
                    />
                )}
            </View>
            {!isCross ? (
                <TouchableOpacity style={styles.roundButton} onPress={onPress}>
                    <Ionicons name='search-outline' color={appColors.lightText} size={responsiveHeight(2.3)} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.roundButton} onPress={onCrossPress}>
                    <Entypo name='cross' color={appColors.lightText} size={responsiveHeight(2.3)} />
                </TouchableOpacity>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    innerContainer: {
        marginVertical: responsiveHeight(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    textinputStyle: {
        color: appColors.inActiveButtonColor,
        marginVertical: Platform.OS === 'ios' ? responsiveHeight(1.5) : 0,
        width: '90%',
        alignSelf: 'center',
    },
    textinputContainer: {
        marginTop: responsiveHeight(2),
        borderRadius: 10,
        width: '85%',
        backgroundColor: appColors.lightText,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    roundButton: {
        width: responsiveWidth(10),
        height: responsiveHeight(4.8),
        backgroundColor: appColors.activeButtonColor,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        alignSelf: 'center',
        marginTop: responsiveHeight(2)
    }
})