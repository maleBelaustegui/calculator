import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/theme';

interface Props {
  text: string;
  color?: string;
  width0?: boolean;
  accion: ( numTxt: string ) => void;
}

export const ButtonCalc = ({
  text,
  color = '#75c58e',
  width0 = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={ () => accion(text)}
    >
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: width0 ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonTxt,
            color: color === '#b2d5ba' ? '#605063' : '#eff3cd',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
