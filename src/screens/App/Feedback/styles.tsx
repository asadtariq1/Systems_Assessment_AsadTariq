import { StyleSheet } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { appColors } from '../../../utils/constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.backgroundColor
    },
    bodyContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: responsiveHeight(2)
    },
    ratingContainer: {
        alignSelf: 'center',
        marginVertical: responsiveHeight(2)
    },
    errorText: {
        color: appColors.warningColor
    }
})