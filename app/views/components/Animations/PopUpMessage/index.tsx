import React from 'react';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { Animated } from 'react-native';
import { Text, TouchableView } from '../../elements';
import { theme, moderateScale } from 'styles';

let timeout: ReturnType<typeof setTimeout>;
const startTimeout = (onClose: () => void): void => {
  timeout = setTimeout(() => {
    onClose();
  }, 2500);
};

const ABSOLUTE = 'absolute';

export class PopUpMessage extends React.PureComponent {
  opacity = new Animated.Value(0);
  zIndex = new Animated.Value(-1);
  message = '';
  isError = false;
  renderStyle = {
    left: 0,
    right: 0,
    opacity: this.opacity,
    zIndex: this.zIndex,
    marginTop: 0,
    paddingHorizontal: 10,
  };

  onShow = (message: string, isError?: boolean): void => {
    const { opacity, zIndex, onClose } = this;
    this.message = message;
    this.isError = !!isError;
    this.forceUpdate();

    opacity.stopAnimation();
    opacity.setValue(0);
    Animated.sequence([
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 1,
      }),
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        delay: 1500,
      }),
    ]).start();
    zIndex.stopAnimation();
    zIndex.setValue(15);

    clearTimeout(timeout);
    startTimeout(onClose);
  };

  onClose = (): void => {
    this.opacity.stopAnimation();
    this.opacity.setValue(0);
    this.zIndex.setValue(-1);
  };

  render(): React.ReactNode {
    const { renderStyle, onClose, message, isError } = this;

    return (
      <SafeAreaInsetsContext.Consumer>
        {(insets: { top: number } | null) => (
          <Animated.View
            style={[
              { position: ABSOLUTE },
              { ...renderStyle, top: moderateScale((insets && insets.top) || 0) },
            ]}
          >
            <TouchableView
              jc="center"
              bg={isError ? theme.colors.coralRed : theme.colors.malachite}
              ph={15}
              pv={15}
              height="auto"
              br={8}
              onPress={onClose}
            >
              <Text color={theme.colors.white} fs={18} bold>
                {message}
              </Text>
            </TouchableView>
          </Animated.View>
        )}
      </SafeAreaInsetsContext.Consumer>
    );
  }
}
