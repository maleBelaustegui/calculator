import React, {useRef, useState} from 'react';

enum operators {
  addition,
  sustraction,
  mult,
  division,
}

export const useCalculator = () => {
  const [prevNum, setPrevNum] = useState('0');

  const [numero, setNumero] = useState('0');

  const lastOperation = useRef<operators>();

  const clean = () => {
    setNumero('0');
    setPrevNum('0');
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

  const changeNumber = () => {
    if (numero.endsWith('.')) {
      setPrevNum(numero.slice(0, -1));
    } else {
      setPrevNum(numero);
    }
    setNumero('0');
  };

  const btnDiv = () => {
    changeNumber();
    lastOperation.current = operators.division;
  };
  const btnMult = () => {
    changeNumber();
    lastOperation.current = operators.mult;
  };

  const btnAdd = () => {
    changeNumber();
    lastOperation.current = operators.addition;
  };

  const btnSus = () => {
    changeNumber();
    lastOperation.current = operators.sustraction;
  };

  const calculate = () => {
    const num1 = Number(numero);
    const num2 = Number(prevNum);

    switch (lastOperation.current) {
      case operators.addition:
        setNumero(`${num1 + num2}`);
        break;

      case operators.sustraction:
        setNumero(`${num2 - num1}`);
        break;

      case operators.mult:
        setNumero(`${num1 * num2}`);
        break;

      case operators.division:
        setNumero(`${num2 / num1}`);
        break;
    }
  };

  return {
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
  };
};
