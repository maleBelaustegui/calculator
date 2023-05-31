import {Text, View} from 'react-native';
import {styles} from '../theme/theme';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    clean,
    formNum,
    positiveNegative,
    btnAdd,
    btnDel,
    btnDiv,
    btnMult,
    btnSus,
    calculate,
    prevNum,
    numero,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {prevNum !== '0' && <Text style={styles.totalS}>{prevNum}</Text>}

      <Text style={styles.totalB} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.rows}>
        <ButtonCalc text="C" color="#b2d5ba" accion={clean} />
        <ButtonCalc text="+/-" color="#b2d5ba" accion={positiveNegative} />
        <ButtonCalc text="del" color="#b2d5ba" accion={btnDel} />
        <ButtonCalc text="/" color="#ff6933" accion={btnDiv} />
      </View>
      <View style={styles.rows}>
        <ButtonCalc text="7" color="#248f8d" accion={formNum} />
        <ButtonCalc text="8" color="#248f8d" accion={formNum} />
        <ButtonCalc text="9" color="#248f8d" accion={formNum} />
        <ButtonCalc text="x" color="#ff6933" accion={btnMult} />
      </View>
      <View style={styles.rows}>
        <ButtonCalc text="4" color="#248f8d" accion={formNum} />
        <ButtonCalc text="5" color="#248f8d" accion={formNum} />
        <ButtonCalc text="6" color="#248f8d" accion={formNum} />
        <ButtonCalc text="-" color="#ff6933" accion={btnSus} />
      </View>
      <View style={styles.rows}>
        <ButtonCalc text="1" color="#248f8d" accion={formNum} />
        <ButtonCalc text="2" color="#248f8d" accion={formNum} />
        <ButtonCalc text="3" color="#248f8d" accion={formNum} />
        <ButtonCalc text="+" color="#ff6933" accion={btnAdd} />
      </View>

      <View style={styles.rows}>
        <ButtonCalc text="0" color="#248f8d" width0 accion={formNum} />
        <ButtonCalc text="." color="#248f8d" accion={formNum} />
        <ButtonCalc text="=" color="#ff6933" accion={calculate} />
      </View>
    </View>
  );
};
