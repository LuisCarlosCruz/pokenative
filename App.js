import React, {useEffect, useState, useReducer} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image
} from 'react-native';
import { getAllPok } from './src/services/getAPI';
import { Provider } from 'react-redux';
import store from './src/store/store';
import pokemon from './src/reducers/getPokByName.reducer';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  const [state, dispatch] = useReducer(pokemon);

  const [allPok, setAllPok] = useState([]);

  useEffect( async () => {
    await getAllPok(setAllPok);
  }, []);
  
  {console.log(allPok)}

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity key={item.id} style={styles.container}>
        <View style={styles.card}>
          <Image
            style={{width: 120, height: 120}}
            source={item.sprites.other.home.front_default}
          />
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <Provider store={ store }>
      <SafeAreaView >
          <FlatList 
          numColumns={2}
          data={allPok}
          renderItem={renderItem}
          keyExtractor={(item) => `key-${item.species.name}`}
          />
      </SafeAreaView>
    </Provider>
  );
}
//   input: {
//     flex: 1,
//     fontSize: 22,
//     // color: '#000000',
//   },
//   addButton: {
//     flex: 1,
//     width: '20%',
//     marginLeft: 2,
//     alignItems: 'center',
//     alignSelf: 'center'
//   }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  }
});
