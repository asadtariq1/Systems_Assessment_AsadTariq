import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { appColors } from '../../utils/constants';
import FastImage from 'react-native-fast-image';

interface GifCardProps {
    item: any;
    onPress: () => void;
}

const GifCard: React.FC<GifCardProps> = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
            <FastImage
                style={styles.cardImage}
                source={{
                    uri: item?.images?.original?.url,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.bottomMainContainer}>
                <Text style={styles.titleText}>{item?.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: appColors.cardBackground,
        alignSelf: 'flex-end',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        width: '100%',
        borderRadius: 8,
        marginTop: responsiveHeight(2)
    },
    cardImage: {
        width: '100%',
        height: responsiveHeight(25),
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        resizeMode: 'cover'
    },
    bottomMainContainer: {
        marginVertical: responsiveHeight(2),
        width: '95%',
        alignSelf: 'center'
    },
    titleText: {
        fontSize: responsiveFontSize(2.2),
        fontWeight: '600',
        color: appColors.placeholderText
    }
});

export default GifCard;