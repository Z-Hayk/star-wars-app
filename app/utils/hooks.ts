import React, { useMemo, useEffect, useRef } from 'react';
import { Keyboard } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation as baseUseNavigation } from '@react-navigation/native';
import { Any } from 'types';
import { dispatch } from 'store';
import { ActionCreator, bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch as baseUseDispatch } from 'react-redux';

export const useDispatch: () => typeof dispatch = baseUseDispatch;
export const useAction = <T extends ActionCreator<Any>>(action: T): T => {
  const baseDispatch = useDispatch();
  return useMemo(() => bindActionCreators(action, baseDispatch), [baseDispatch]);
};

export const usePrevious = <T>(value: T): T | void => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const useNavigation: () => NativeStackNavigationProp<Any> = baseUseNavigation;

export const navigationRef = React.createRef<Any>();

export const asyncNavigate: <T>(rout: string, params?: T) => void = (rout, params) => {
  Keyboard.dismiss();

  setTimeout(() => navigationRef.current?.navigate(rout, params), 100);
};

export const useSafeArea = useSafeAreaInsets;
