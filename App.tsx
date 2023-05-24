import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import {styles} from './src/theme/theme';
import {CalculatorScreen} from './src/screens/CalculatorScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="#5e5473" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
