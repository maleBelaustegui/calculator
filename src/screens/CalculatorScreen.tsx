import React, {useState} from 'react';
import {NativeModules, Text, View} from 'react-native';
import {styles} from '../theme/theme';
import {ButtonCalc} from '../components/ButtonCalc';

export const CalculatorScreen = () => {
  const [prevNum, setPrevNum] = useState('0');

  const [numero, setNumero] = useState('0');

  const clean = () => {
    setNumero('0');
  };

  const formNum = (numTxt: string) => {
    // Do not allow 2 points
    if (numero.includes('.') && numTxt === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // decimal

      if (numTxt === '.') {
        setNumero(numero + numTxt);
      } else if (numTxt === '0' && numero.includes('.')) {
        setNumero(numero + numTxt);
      } else if (numTxt !== '0' && !numero.includes('.')) {
        setNumero(numTxt);
      } else if (numTxt === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numTxt);
      }
    } else {
      setNumero(numero + numTxt);
    }
  };

  const positiveNegative = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDel = () => {
    let negative = '';
    let numTemp = numero;
    if (numero.includes('-')) {
      negative = '-';
      numTemp = numero.substring(1);
    }
    if (numTemp.length > 1) {
      setNumero(negative + numTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.totalS}>{prevNum}</Text>
      <Text style={styles.totalB} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.rows}>
        <ButtonCalc text="C" color="#b2d5ba" accion={clean} />
        <ButtonCalc text="+/-" color="#b2d5ba" accion={positiveNegative} />
        <ButtonCalc text="del" color="#b2d5ba" accion={btnDel} />
        <ButtonCalc text="/" color="#ff6933" accion={clean} />
      </View>
      <View style={styles.rows}>
        <ButtonCalc text="7" color="#248f8d" accion={formNum} />
        <ButtonCalc text="8" color="#248f8d" accion={formNum} />
        <ButtonCalc text="9" color="#248f8d" accion={formNum} />
        <ButtonCalc text="x" color="#ff6933" accion={clean} />
      </View>
      <View style={styles.rows}>
        <ButtonCalc text="4" color="#248f8d" accion={formNum} />
        <ButtonCalc text="5" color="#248f8d" accion={formNum} />
        <ButtonCalc text="6" color="#248f8d" accion={formNum} />
        <ButtonCalc text="-" color="#ff6933" accion={clean} />
      </View>
      <View style={styles.rows}>
        <ButtonCalc text="1" color="#248f8d" accion={formNum} />
        <ButtonCalc text="2" color="#248f8d" accion={formNum} />
        <ButtonCalc text="3" color="#248f8d" accion={formNum} />
        <ButtonCalc text="+" color="#ff6933" accion={clean} />
      </View>

      <View style={styles.rows}>
        <ButtonCalc text="0" color="#248f8d" width0 accion={formNum} />
        <ButtonCalc text="." color="#248f8d" accion={formNum} />
        <ButtonCalc text="=" color="#ff6933" accion={clean} />
      </View>
    </View>
  );
};
