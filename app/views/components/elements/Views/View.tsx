import React, { Fragment, FunctionComponent } from 'react';
import { View as BaseView } from 'react-native';
import { ViewProps } from './types';
import { ReactChildren } from 'types';
import { renderStyle } from './styles';

export const View: FunctionComponent<ViewProps & ReactChildren> = ({
  children,
  style,
  onLayout,
  ...props
}) => (
  <BaseView style={[renderStyle(props).view, style]} {...(onLayout ? { onLayout } : {})}>
    <Fragment>{children}</Fragment>
  </BaseView>
);

View.defaultProps = {
  width: '100%',
};
