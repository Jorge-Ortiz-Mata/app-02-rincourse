import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {

  return (
    <View style={styles.main}>
      <StartGameScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#CFFF8D',
  }
});
