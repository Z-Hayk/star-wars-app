import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { GeneralView, View, SimpleHeader, StarWarsDataList } from 'components';
import { HEADER_HEIGHT } from 'config';
import { RootState } from 'types';
import * as AppActions from 'modules/app/actions';
import { useAction, useSafeArea } from 'utils';

export const FavoritesScreen: FunctionComponent = () => {
  const { top } = useSafeArea();
  const cacheData = useSelector((state: RootState) => state.app.cacheData);

  const deleteCacheData = useAction(AppActions.deleteCacheData);

  return (
    <GeneralView pt={0}>
      <SimpleHeader title="Favorites" />

      <View flex={1} pt={top + HEADER_HEIGHT}>
        <StarWarsDataList onDelete={deleteCacheData} data={cacheData} />
      </View>
    </GeneralView>
  );
};
