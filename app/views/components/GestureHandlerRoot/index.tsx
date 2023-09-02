import React, { FunctionComponent } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ReactChildren } from 'types';

const FLEX_GROW = 1;

export const GestureHandlerRoot: FunctionComponent<ReactChildren> = ({ children }) => (
  <GestureHandlerRootView style={{ flexGrow: FLEX_GROW }}>{children}</GestureHandlerRootView>
);
