import React, { FunctionComponent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  GeneralView,
  View,
  KeyboardAvoidingView,
  HeaderWithSearch,
  PageLoader,
  StarWarsDataList,
  RefreshControl,
} from 'components';
import { useSafeArea, useAction } from 'utils';
import { AsyncStatus, RootState } from 'types';
import { theme } from 'styles';
import * as HomeActions from 'modules/home/actions';
import * as AppActions from 'modules/app/actions';
import { HEADER_HEIGHT } from 'config';

export const HomeScreen: FunctionComponent = () => {
  const { top } = useSafeArea();
  const home = useSelector((state: RootState) => state.home);
  const [refreshing, setRefreshing] = useState(false);

  const getHomeInfo = useAction(HomeActions.getHomeInfo.request);
  const addCacheData = useAction(AppActions.addCacheData);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <GeneralView pt={0}>
      <HeaderWithSearch searchText={home.searchText} setSearchText={getHomeInfo} />

      <KeyboardAvoidingView>
        <View flex={1} pt={top + HEADER_HEIGHT}>
          {home.getHomeInfoReqStat === AsyncStatus.LOADING ? (
            <PageLoader />
          ) : (
            <StarWarsDataList
              onFavorite={addCacheData}
              isInitialMode={home.getHomeInfoReqStat === AsyncStatus.NONE}
              refreshControl={
                <RefreshControl
                  tintColor={theme.colors.black}
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  enabled
                />
              }
              data={home.data}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </GeneralView>
  );
};
