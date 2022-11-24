import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import Welcome from './screens/Welcome';

export default function App() {

  return (
    <View style={styles.main}>
      <Welcome />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#9C254D',
  }
});
