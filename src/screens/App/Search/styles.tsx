import { StyleSheet } from 'react-native'
import { appColors } from '../../../utils/constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.backgroundColor
    },
    bodyContainer: {
      width: '90%',
      alignSelf: 'center',
    }
})