import React from 'react';
import { View, StyleSheet, TextInput, Text, TextStyle, ViewStyle } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { appColors } from '../../utils/constants';

interface TextinputsWithTitleProps {
    onChangeText: (text: string) => void;
    placeholder: string;
    value: string;
    title: string;
    isPassword?: boolean;
    isEmail?: boolean;
    isMultiline?: boolean;
}

const TextinputsWithTitle: React.FC<TextinputsWithTitleProps> = ({
    onChangeText,
    placeholder,
    value,
    title,
    isPassword = false,
    isEmail = false,
    isMultiline = false
}) => {
    return (
        <View style={styles.innerContainer}>
            {title !== '' && (
                <Text style={styles.fieldTitle}>{title}</Text>
            )}
            <View style={[styles.textinputContainer, { marginTop: title ? responsiveHeight(2) : 0 }]}>
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    style={[styles.textinputStyle, { height: isMultiline ? responsiveHeight(15) : responsiveHeight(5.5) }]}
                    placeholderTextColor={appColors.placeholderText}
                    secureTextEntry={isPassword}
                    keyboardType={isEmail ? 'email-address' : 'default'}
                    multiline={isMultiline}
                />
            </View>
        </View>
    );
}

interface Styles {
    innerContainer: ViewStyle;
    textinputStyle: TextStyle;
    textinputContainer: ViewStyle;
    fieldTitle: TextStyle;
}

const styles = StyleSheet.create<Styles>({
    innerContainer: {
        marginVertical: responsiveHeight(1),
    },
    textinputStyle: {
        color: appColors.lightText,
        width: '95%',
        alignSelf: 'center',
    },
    textinputContainer: {
        borderWidth: 0.5,
        borderColor: appColors.placeholderText,
        borderRadius: 10
    },
    fieldTitle: {
        color: appColors.lightText
    }
});

export default TextinputsWithTitle;