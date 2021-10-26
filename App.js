import React from 'react';
import { View,StyleSheet} from 'react-native';
import Carlist from './Components/Carlist';
import Header from './Components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Carlist/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
