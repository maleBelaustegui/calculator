import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/theme';
import { ButtonCalc } from '../components/ButtonCalc';


export const CalculatorScreen = () => {


  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.totalS}>1,500.00</Text>
      <Text style={styles.totalB}>1,500.00</Text>

      <View style={styles.rows}>
      <ButtonCalc text="C" color= '#19b5a5' />
      <ButtonCalc text="+/-" color= '#19b5a5'/>
      <ButtonCalc text="del" color= '#19b5a5' />
      <ButtonCalc text="/" color= '#ff6933'/>
      </View>
    </View>
  );
};
