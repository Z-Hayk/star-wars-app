import React, { FunctionComponent } from 'react';
import { GeneralView, Text, View, Button } from 'components';
import { useAction } from 'utils';
import * as AppActions from 'modules/app/actions';

export const WelcomeScreen: FunctionComponent = () => {
  const changeAppInfo = useAction(AppActions.changeAppInfo);

  return (
    <GeneralView>
      <View flex={1} ph={21} jc="center" ai="center">
        <Text ta="center" bold fs={50}>
          Welcome
        </Text>
        <Button
          mb={100}
          mt={50}
          label="Start testing"
          onPress={() => changeAppInfo({ key: 'initialScreen', value: 'Home' })}
        />
      </View>
    </GeneralView>
  );
};
