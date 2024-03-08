import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import GifCard from '../Cards/GifCard';

interface HomeCardListProps {
    data: any[];
    onPress: (item: any) => void;
    onEndReached: () => void;
}

const HomeCardList: React.FC<HomeCardListProps> = ({ data, onPress, onEndReached }) => {
    const renderItem = ({ item }: { item: any }) => {
        return <GifCard item={item} onPress={() => onPress(item)} />;
    };

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item: any, index: number) => item.slug || index.toString()}
                onEndReachedThreshold={0.5}
                onEndReached={onEndReached}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%'
    },
})

export default HomeCardList;