import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-simple-toast';
import SimpleHeader from '../../../components/Headers/SimpleHeader';
import { SearchBarTextinput } from '../../../components/Textinputs/SearchBarTextinput';
import HomeCardList from '../../../components/Lists/HomeCardList';
import { getTrendingGifs } from '../../../services/api';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    getAllTrendingGifs();
  }, []);

  const getAllTrendingGifs = async () => {
    if (!hasMore) return;
    setIsLoading(true);
    getTrendingGifs(pageOffset, async (res: any) => {
      let result = JSON.parse(res);
      if (result === 'error') {
        Toast.showWithGravity('Error while fetching data', Toast.LONG, Toast.BOTTOM);
        setIsLoading(false);
      } else {
        setPageOffset(pageOffset + 15);
        setData([...data, ...result?.data]);
        if (result?.pagination?.offset < result?.pagination?.total_count) {
          setHasMore(true);
        } else {
          setHasMore(false);
        }
        setIsLoading(false);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Spinner
        visible={isLoading}
        size={'small'}
        overlayColor={'rgba(0, 0, 0, 0.8)'}
      />

      <SimpleHeader title={'GIPHY'} />

      <View style={styles.bodyContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <SearchBarTextinput
            placeholder={'Search all the GIFs'}
          />
        </TouchableOpacity>

        <HomeCardList
          data={data}
          onEndReached={getAllTrendingGifs}
          onPress={(item: any) => {
            navigation.navigate('Feedback', { prevItem: item });
          }}
        />
      </View>
    </View>
  );
};

export default Home;