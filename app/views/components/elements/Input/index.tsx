import React, { useMemo, Fragment, FunctionComponent } from 'react';
import { TextInput, ViewStyle, TextStyle, KeyboardType } from 'react-native';
import { View, ViewProps } from '../Views';
import { theme, moderateScale } from 'styles';
import { isAndroid } from 'utils';

interface InputProps extends ViewProps {
  isChat?: boolean;

  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  error?: string;
  keyboardType?: KeyboardType | 'visible-password';
  forwardedRef?: React.Ref<TextInput>;
}

export const Input: FunctionComponent<InputProps> = ({
  isChat,
  placeholder,
  value,
  onChangeText,
  error,
  keyboardType,
  forwardedRef,
  ...props
}) => {
  const renderStyle = useMemo(() => {
    const styles: {
      view: ViewProps;
      input: ViewStyle & TextStyle;
    } = {
      view: {
        jc: 'center',
        br: 10,
        bw: 0,
        bg: theme.colors.white,
        bc: theme.colors.white,
      },
      input: {
        backgroundColor: theme.colors.white,
        borderRadius: moderateScale(8),
        height: moderateScale(45),
        fontSize: moderateScale(18),
        paddingTop: 0,
        paddingBottom: 0,
        color: theme.colors.black,
        paddingHorizontal: moderateScale(16),
      },
    };

    if (isChat) {
      styles.input.height = moderateScale(35);
      styles.input.backgroundColor = theme.colors.concrete;
      styles.input.fontSize = moderateScale(16);
      styles.input.fontFamily = theme.fonts.Regular;
      styles.input.borderWidth = moderateScale(1);
      styles.input.borderColor = theme.colors.blackLite2;
    }
    // if (error) {
    //   styles.view.borderWidth = moderateScale(1);
    //   styles.view.borderColor = theme.colors.thunderBird;
    // }

    return styles;
  }, [error, isChat]);

  return (
    <Fragment>
      <View style={renderStyle.view} {...props}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={false}
          autoCorrect={false}
          autoCapitalize="none"
          onFocus={() => false}
          onBlur={() => false}
          style={renderStyle.input}
          placeholderTextColor={theme.colors.silverLite}
          ref={forwardedRef}
          keyboardType={keyboardType || (isAndroid ? 'visible-password' : 'default')}
        />

        {/*{!!error && (*/}
        {/*  <View style={renderStyle.exclamation}>*/}
        {/*    /!*<Image source={require('views/assets/icons/exclamationMark.png')} />*!/*/}
        {/*  </View>*/}
        {/*)}*/}
      </View>
      {/*{!!error && (*/}
      {/*  <View pl="20@ms0.3" pt="10@ms0.3">*/}
      {/*    <Text fs="18@ms0.3" color={theme.colors.thunderBird}>*/}
      {/*      {error}*/}
      {/*    </Text>*/}
      {/*  </View>*/}
      {/*)}*/}
    </Fragment>
  );
};

export const InputRef = React.forwardRef((props: InputProps, ref?: React.Ref<TextInput>) => (
  <Input {...props} forwardedRef={ref} />
));

Input.defaultProps = {
  error: '',
  keyboardType: undefined,
};
