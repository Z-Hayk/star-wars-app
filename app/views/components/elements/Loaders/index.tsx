import React, { FunctionComponent } from 'react';
import { DotIndicator, DotIndicatorProps } from 'react-native-indicators';
import { theme, moderateScale } from 'styles';
import { View, ViewProps } from '../Views';

export const PageLoader: FunctionComponent<ViewProps> = ({ ...props }) => (
  <View flex={1} {...props}>
    <MiniLoader />
  </View>
);

export const MiniLoader: FunctionComponent<DotIndicatorProps> = ({ ...props }) => {
  return <DotIndicator {...props} />;
};

MiniLoader.defaultProps = {
  color: theme.colors.black,
  count: 3,
  size: moderateScale(6),
};
