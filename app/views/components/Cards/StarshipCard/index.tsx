import React, { FunctionComponent } from 'react';
import { View, Text, TouchableView, ViewProps } from 'components';
import { StarWarsRSDT } from 'types';
import { theme } from 'styles';
import { DeleteIcon, FavoriteIcon } from 'assets/icons';

interface StarshipCardProps extends ViewProps {
  item: StarWarsRSDT;
  onFavorite: (arg: StarWarsRSDT) => void;
  onDelete: (arg: StarWarsRSDT) => void;
}

export const StarshipCard: FunctionComponent<StarshipCardProps> = ({
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
    <View width="auto" mt={20}>
      <Text fs={16}>Manufacturer: {item.manufacturer}</Text>
    </View>
    <View width="auto" mt={20}>
      <Text fs={16}>Model: {item.model}</Text>
    </View>
    <View width="auto" mt={20}>
      <Text fs={16}>Passengers: {item.passengers}</Text>
    </View>
  </View>
);
