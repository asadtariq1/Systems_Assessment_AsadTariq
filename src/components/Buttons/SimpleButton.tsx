import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { appColors } from '../../utils/constants';

interface SimpleButtonProps {
    title: string;
    onPress: () => void;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
            <Text style={styles.titleText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: appColors.activeButtonColor,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        alignItems: 'center',
        marginTop: responsiveHeight(3)
    },
    titleText: {
        color: appColors.lightText,
        marginVertical: responsiveHeight(1.6),
        fontSize: responsiveFontSize(2),
        fontWeight: '600'
    }
});

export default SimpleButton;