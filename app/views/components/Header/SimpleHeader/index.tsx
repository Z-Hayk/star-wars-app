import React, { FunctionComponent } from 'react';
import { View, Text, TouchableView } from 'components';
import { useSafeArea, useAction } from 'utils';
import { theme } from 'styles';
import { HEADER_HEIGHT } from 'config';
import * as AppActions from 'modules/app/actions';

export const SimpleHeader: FunctionComponent<{ title: string }> = ({ title }) => {
  const { top } = useSafeArea();
  const logOut = useAction(AppActions.resetStore);
  const changeAppInfo = useAction(AppActions.changeAppInfo);

  return (
    <View
      zi={1}
      height={top + HEADER_HEIGHT}
      position="absolute"
      bg={theme.colors.alto}
      jc="flex-end"
    >
      <View height={HEADER_HEIGHT} pv={20} ph={20} jc="space-between" ai="center" fd="row">
        <TouchableView width="auto" onPress={() => changeAppInfo({ key: 'cacheData', value: [] })}>
          <Text color={theme.colors.azureRadiance} fs={16}>
            Delete All
          </Text>
        </TouchableView>
        <Text fs={30}>{title}</Text>
        <TouchableView width="auto" onPress={logOut}>
          <Text color={theme.colors.coralRed} fs={16}>
            Log Out
          </Text>
        </TouchableView>
      </View>
    </View>
  );
};
