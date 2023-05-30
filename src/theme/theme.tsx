import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#5e5473',
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    padding: 20,
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  totalB: {
    fontSize: 60,
    color: '#ede89d',
    textAlign: 'right',
    marginBottom: 10
  },
  totalS: {
    fontSize: 30,
    color: '#ede89d',
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#b2d5ba',
    // alignItems: 'flex-start',
    borderRadius: 100,
    height: 80,
    width: 80,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  buttonTxt: {
    padding: 10,
    fontSize: 30,
    textAlign: 'center',
    color: '#ede89d',
  },
});
