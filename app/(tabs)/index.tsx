import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  resultText: {
    fontSize: 48,
    color: '#000',
  },
  buttonsContainer: {
    flex: 3,
    backgroundColor: '#e0e0e0',
    padding: 10,
    paddingBottom: 300
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#d4d4d2',
    padding: 20,
    borderRadius: 10,
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#000',
  },
});

const App: React.FC = () => {
  const [result, setResult] = useState('0');
  const [calculation, setCalculation] = useState('');

  const handlePress = (buttonValue: string) => {
    if (buttonValue === 'C') {
      setResult('0');
      setCalculation('');
    } else if (buttonValue === '=') {
      try {
        setResult(eval(calculation).toString());
      } catch (error) {
        setResult('Error');
      }
    } else {
      setCalculation((prev) => prev + buttonValue);
      setResult((prev) => (prev === '0' ? buttonValue : prev + buttonValue));
    }
  };

  const buttons = [
    ['C', '()', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((buttonValue) => (
              <TouchableOpacity
                key={buttonValue}
                style={styles.button}
                onPress={() => handlePress(buttonValue)}
              >
                <Text style={styles.buttonText}>{buttonValue}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default App;
