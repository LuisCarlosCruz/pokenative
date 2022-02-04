import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { getAllPok } from './src/services/getAPI';
import { Provider } from 'react-redux';
import store from './src/store/store';

export default function App() {

  const [allPok, setAllPok] = useState([]);

  useEffect( async () => {
    await getAllPok(setAllPok);
  }, []);

  return (
    <Provider store={ store }>
      <View style={styles.container}>
        <View style={styles.inputContainer} >
          <TextInput style={styles.input} placeholder="Nome do Pokemon" />
          <TouchableOpacity>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e7e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 30,
    backgroundColor: '#e7e',
  },
  input: {
    flex: 1,
    fontSize: 22,
    // color: '#000000',
  },
  addButton: {
    flex: 1,
    width: '20%',
    marginLeft: 2,
    alignItems: 'center',
    alignSelf: 'center'
  }
});
