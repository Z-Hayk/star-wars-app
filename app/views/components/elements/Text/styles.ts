import { TextProps } from './types';
import { StyleSheet } from 'react-native';
import { theme } from 'styles';

export const renderStyle = (props: TextProps): { text: object } => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fontFamilyGenerator = (): Object => {
    let fontFamily: string = theme.fonts.Regular; // Regular default
    let fontWeight = '400';

    if (props.light) {
      fontFamily = theme.fonts.Light; // Light
      fontWeight = '200';
    }
    if (props.bold) {
      fontFamily = theme.fonts.Bold; // Medium
      fontWeight = '600';
    }
    if (props.extraBold) {
      fontFamily = theme.fonts.ExtraBold; // Bold
      fontWeight = '800';
    }

    return { fontFamily, fontWeight };
  };

  return StyleSheet.create({
    text: {
      color: props.color,
      // ...fontFamilyGenerator(),
      fontStyle: 'normal',
      ...(props.fs && { fontSize: props.fs }),
      ...(props.lh && { lineHeight: props.lh }),
      ...(props.ta && { textAlign: props.ta }),
      ...(props.td && { textDecorationLine: props.td }),
    },
  });
};
