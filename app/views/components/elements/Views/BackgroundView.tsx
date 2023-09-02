import React, { Fragment, FunctionComponent } from 'react';
import { ImageBackground, ImageBackgroundProps } from 'react-native';
import { ViewProps } from './types';
import { ReactChildren } from 'types';
import { renderStyle } from './styles';

type BackgroundViewProps = ViewProps &
  Omit<ImageBackgroundProps, 'width' | 'height'> &
  ReactChildren;

export const BackgroundView: FunctionComponent<BackgroundViewProps> = ({
  children,
  source,
  style,
  ...props
}) => (
  <ImageBackground
    {...(props.br ? { borderRadius: props.br } : {})}
    {...(props.resizeMode ? { resizeMode: props.resizeMode } : {})}
    style={[renderStyle(props).view, style]}
    source={source}
  >
    <Fragment>{children}</Fragment>
  </ImageBackground>
);

BackgroundView.defaultProps = {
  width: '100%',
};
