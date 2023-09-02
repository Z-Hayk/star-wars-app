import React, { FunctionComponent, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'components';
import { PeopleCard, PlanetCard, StarshipCard, FilmCard } from '../../Cards';
import { StarWarsRSDT, RefreshControlProps } from 'types';
import { moderateScale } from 'styles';
import { ListEmptyContent } from '../ListEmptyContent';

interface HomeListProps {
  data: StarWarsRSDT[];
  refreshControl?: RefreshControlProps;
  isInitialMode?: boolean;
  onFavorite?: (arg: StarWarsRSDT) => void;
  onDelete?: (arg: StarWarsRSDT) => void;
}

export const StarWarsDataList: FunctionComponent<HomeListProps> = ({
  data,
  onFavorite,
  onDelete,
  isInitialMode,
  refreshControl,
}) => {
  const flatListRenderItem = useCallback(
    ({ item, index }: { item: StarWarsRSDT; index: number }) => {
      switch (item.type) {
        case 'people': {
          return (
            <PeopleCard
              mt={index === 0 ? 20 : 0}
              mb={20}
              onDelete={value => onDelete && onDelete(value)}
              onFavorite={value => onFavorite && onFavorite(value)}
              item={item}
            />
          );
        }
        case 'starship': {
          return (
            <StarshipCard
              mt={index === 0 ? 20 : 0}
              mb={20}
              onDelete={value => onDelete && onDelete(value)}
              onFavorite={value => onFavorite && onFavorite(value)}
              item={item}
            />
          );
        }
        case 'planet': {
          return (
            <PlanetCard
              mt={index === 0 ? 20 : 0}
              mb={20}
              onDelete={value => onDelete && onDelete(value)}
              onFavorite={value => onFavorite && onFavorite(value)}
              item={item}
            />
          );
        }
        default: {
          return (
            <FilmCard
              mt={index === 0 ? 20 : 0}
              mb={20}
              onDelete={value => onDelete && onDelete(value)}
              onFavorite={value => onFavorite && onFavorite(value)}
              item={item}
            />
          );
        }
      }
    },
    [onFavorite, onDelete],
  );

  const TITLE = isInitialMode
    ? 'For the search engine to work, you must enter more than two letters'
    : "It's empty here";

  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      refreshControl={refreshControl}
      keyboardDismissMode="none"
      ListEmptyComponent={<ListEmptyContent title={TITLE} />}
      data={data}
      keyExtractor={item => item.id}
      renderItem={flatListRenderItem}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 1,
    paddingHorizontal: moderateScale(20),
  },
});
