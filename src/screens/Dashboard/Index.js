import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Layout} from '../../theme';
const Index = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text>Signout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text>Capture an image/video</Text>
      </TouchableOpacity>
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
  buttonStyle: {
    padding: Layout.SV_10,
    borderWidth: 1,
    marginVertical: Layout.SV_10,
  },
});
