import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
