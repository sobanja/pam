import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, Text, StyleSheet, View } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const countWordsWithA = () => {
    // Разбиваем текст на слова, фильтруем слова, содержащие букву "А" или "а"
    const words = text.split(' ').filter(word => /[аА]/.test(word));
    setWordCount(words.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Подсчет слов с буквой "А"</Text>
      <TextInput
        style={styles.input}
        placeholder="Введите текст"
        value={text}
        onChangeText={setText}
      />
      <Button title="Подсчитать" onPress={countWordsWithA} />
      <View style={styles.result}>
        <Text style={styles.resultText}>Количество слов с буквой "А": {wordCount}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
