import React, { useEffect, useState } from 'react';
import { View, StatusBar, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../../utils/constants';

interface Props {
  navigation: any;
}

const Splash: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('App');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />

      <View style={styles.bodyContainer}>
        <Text style={styles.titleText}>Coding Test</Text>
        {isLoading ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator size="small" color={appColors.activeButtonColor} />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Splash;