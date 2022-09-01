import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Layout} from '../../theme';
import SuperTokens from 'supertokens-react-native';
import loginWithGoogle from './google';
// TODO: Replace this with your own IP
// NOTE: We use our IP (and not 10.0.2.2) here because of iOS
export const API_DOMAIN = 'http://192.168.100.5:3001';

// Initialise SuperTokens
SuperTokens.init({
  apiDomain: `${API_DOMAIN}`,
});
const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    /*
      When the app loads we check if the user is already logged in using SuperTokens.doesSessionExist().
    */
    const checkForSession = async () => {
      if (await SuperTokens.doesSessionExist()) {
        setIsLoggedIn(true);
      }
    };

    checkForSession();
  }, []);

  if (isLoggedIn) {
    // navigation.navigate('Dashboard');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={async () => {
          await loginWithGoogle();
          setIsLoggedIn(true);
        }}
        style={styles.buttonStyle}>
        <Text>Login With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text>Login With Facebook</Text>
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
