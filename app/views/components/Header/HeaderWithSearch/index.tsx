import React, { FunctionComponent } from 'react';
import { View, Input } from 'components';
import { useSafeArea } from 'utils';
import { theme } from 'styles';
import { HEADER_HEIGHT } from 'config';

interface HeaderWithSearchProps {
  searchText: string;
  setSearchText: (arg: string) => void;
}

export const HeaderWithSearch: FunctionComponent<HeaderWithSearchProps> = ({
  searchText,
  setSearchText,
}) => {
  const { top } = useSafeArea();

  return (
    <View
      zi={1}
      height={top + HEADER_HEIGHT}
      position="absolute"
      bg={theme.colors.alto}
      jc="flex-end"
    >
      <View pv={20} ph={20}>
        <Input placeholder="Type here" value={searchText} onChangeText={setSearchText} />
      </View>
    </View>
  );
};
