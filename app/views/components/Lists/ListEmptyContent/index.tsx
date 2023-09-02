import React, { FunctionComponent } from 'react';
import { View, Text } from 'components';

export const ListEmptyContent: FunctionComponent<{ title: string }> = ({ title }) => (
  <View flex={1} jc="center" ai="center">
    <Text ta="center" fs={20}>
      {title}
    </Text>
  </View>
);
