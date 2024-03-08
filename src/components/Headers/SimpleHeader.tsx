import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { appColors } from '../../utils/constants';

interface SimpleHeaderProps {
    onBackPress?: () => void;
    title: string;
    isBackButton?: boolean;
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({ onBackPress, title, isBackButton }) => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                backgroundColor="transparent"
                barStyle={'light-content'}
                translucent={true}
            />
            <SafeAreaView style={{ marginVertical: responsiveHeight(2) }}>
                <View style={styles.headerMainContainer}>
                    <View style={styles.headerInnerContainer}>
                        {isBackButton && (
                            <TouchableOpacity onPress={onBackPress}>
                                <AntDesign name='arrowleft' color={appColors.lightText} size={responsiveHeight(3.5)} />
                            </TouchableOpacity>
                        )}
                        <Text style={styles.titleText} numberOfLines={1}>{title}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: appColors.activeButtonColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    headerMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
        alignSelf: 'center',
        marginBottom: responsiveHeight(1),
        marginTop: Platform.OS === 'android' ? responsiveHeight(3) : 0
    },
    headerInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    titleText: {
        color: appColors.lightText,
        fontSize: responsiveFontSize(3),
        fontWeight: '600',
        marginLeft: responsiveWidth(6)
    },
});

export default SimpleHeader;