import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-simple-toast';
import SimpleHeader from '../../../components/Headers/SimpleHeader';
import { SearchBarTextinput } from '../../../components/Textinputs/SearchBarTextinput';
import HomeCardList from '../../../components/Lists/HomeCardList';
import { searchGifs } from '../../../services/api';

interface SearchProps {
  navigation: any;
}

const Search: React.FC<SearchProps> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [data, setData] = useState<any[]>([]);
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isCross, setIsCross] = useState<boolean>(false);

  const onSearchPress = async () => {
    if (searchText === '') {
      Toast.showWithGravity('Enter GIF title to search', Toast.LONG, Toast.BOTTOM);
    } else {
      if (!hasMore) {
        return;
      } else {
        setIsLoading(true);
        searchGifs(searchText, pageOffset, async (res: string) => {
          let result = JSON.parse(res);
          if (result === 'error') {
            Toast.showWithGravity('Error while fetching data', Toast.LONG, Toast.BOTTOM);
            setIsLoading(false);
          } else {
            setPageOffset(pageOffset + 15);
            setData([...data, ...result?.data]);
            setIsCross(true)
            if (result?.pagination?.offset < result?.pagination?.total_count) {
              setHasMore(true);
            } else {
              setHasMore(false);
            }
          }
        });
        setIsLoading(false);
      }
    }
  };


  const onCrossPress = async () => {
    setSearchText('')
    setData([]);
    setIsCross(false)
  }

  return (
    <View style={styles.container}>
      <Spinner
        visible={isLoading}
        size={'small'}
        overlayColor={'rgba(0, 0, 0, 0.8)'}
      />

      <SimpleHeader
        title={'Search GIPHY'}
        isBackButton
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.bodyContainer}>
        <SearchBarTextinput
          onChangeText={(text: string) => setSearchText(text)}
          placeholder={'Search all the GIFs'}
          value={searchText}
          onPress={() => onSearchPress()}
          isCross={isCross}
          onCrossPress={() => onCrossPress()}
        />

        <HomeCardList
          data={data}
          onEndReached={onSearchPress}
          onPress={(item: any) => {
            navigation.navigate('Feedback', { prevItem: item });
          }}
        />
      </View>

    </View>
  );
};

export default Search;