import React, { FunctionComponent } from 'react';
import { View, Text, TouchableView, ViewProps } from 'components';
import { StarWarsRSDT } from 'types';
import { theme } from 'styles';
import { DeleteIcon, FavoriteIcon } from 'assets/icons';

interface FilmCardProps extends ViewProps {
  item: StarWarsRSDT;
  onFavorite: (arg: StarWarsRSDT) => void;
  onDelete: (arg: StarWarsRSDT) => void;
}

export const FilmCard: FunctionComponent<FilmCardProps> = ({
  item,
  onFavorite,
  onDelete,
  ...props
}) => (
  <View bg={theme.colors.white} bw={1} bc={theme.colors.alto} pv={20} ph={20} {...props}>
    <View fd="row" width="auto" jc="space-between">
      <Text fs={20}>{item.title}</Text>
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
      <Text fs={16}>Director: {item.director}</Text>
    </View>
    <View width="auto" mt={20}>
      <Text fs={16}>Producer: {item.producer}</Text>
    </View>
  </View>
);
