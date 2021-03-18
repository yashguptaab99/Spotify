import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Album from '../components/Album';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Album album={} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
