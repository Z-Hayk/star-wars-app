import React, { Fragment, useMemo, FunctionComponent } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView as BseKeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { isIOS } from 'utils';
import { View } from '../Views';
import { ReactChildren } from 'types';

const FLEX_GROW = 1;

interface KeyboardAvoidingProps extends ReactChildren {
  isTouch?: boolean;
}

export const KeyboardAvoidingView: FunctionComponent<KeyboardAvoidingProps> = ({
  children,
  isTouch,
}) => {
  // const { top } = useSafeArea();

  const content = useMemo(
    () => (
      <TouchableWithoutFeedback onPress={() => isTouch && Keyboard.dismiss()}>
        <View flex={1}>{children}</View>
      </TouchableWithoutFeedback>
    ),
    [children, isTouch],
  );

  return (
    <Fragment>
      {isIOS ? (
        <BseKeyboardAvoidingView
          behavior="padding"
          enabled
          keyboardVerticalOffset={0}
          style={{ flexGrow: FLEX_GROW }}
        >
          {content}
        </BseKeyboardAvoidingView>
      ) : (
        content
      )}
    </Fragment>
  );
};

KeyboardAvoidingView.defaultProps = {
  isTouch: true,
};
