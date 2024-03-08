import { StyleSheet } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { appColors } from '../../../utils/constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.backgroundColor
    },
    bodyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    titleText: {
        color: appColors.lightText,
        fontSize: responsiveFontSize(3.5)
    },
    activityIndicatorContainer: {
        marginTop: responsiveHeight(4)
    }
})