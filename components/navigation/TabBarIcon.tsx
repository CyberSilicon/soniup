// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { FontAwesome5 } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

interface TabBarIconProps extends IconProps<any> {
  iconType: 'FontAwesome5' | 'MaterialIcons'; // Prop to choose between Ionicons or MaterialIcons
}

export function TabBarIcon({ style, iconType, ...rest }: TabBarIconProps) {
  return (
    iconType === 'FontAwesome5' ? (
      <FontAwesome5 size={28} style={[{ marginBottom: -3 }, style]} {...rest} />
    ) : (
      <MaterialIcons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />
    )
  );
}
