import React, { FunctionComponent } from 'react';
import { View, Text, TouchableView, ViewProps } from 'components';
import { StarWarsRSDT } from 'types';
import { theme } from 'styles';
import { FavoriteIcon, DeleteIcon } from 'assets/icons';

interface PeopleCardProps extends ViewProps {
  item: StarWarsRSDT;
  onFavorite: (arg: StarWarsRSDT) => void;
  onDelete: (arg: StarWarsRSDT) => void;
}

export const PeopleCard: FunctionComponent<PeopleCardProps> = ({
  item,
  onFavorite,
  onDelete,
  ...props
}) => (
  <View bg={theme.colors.white} bw={1} bc={theme.colors.alto} pv={20} ph={20} {...props}>
    <View fd="row" width="auto" jc="space-between">
      <Text fs={20}>{item.name}</Text>
      {item.isCache ? (
        <TouchableView width="auto" onPress={() => onDelete(item)}>
          <DeleteIcon color={theme.colors.pomegranate} />
        </TouchableView>
      ) : (
        <TouchableView width="auto" onPress={() => onFavorite(item)}>
          <FavoriteIcon color={theme.colors.pomegranate} />
        </TouchableView>
      )}
    </View>
    <View fd="row" width="auto" jc="space-between" mt={20}>
      <View width="auto">
        <Text fs={16}>Gender: {item.gender}</Text>
      </View>
      <View width="auto">
        <Text fs={16}>Starships: {item.starships}</Text>
      </View>
    </View>
  </View>
);
