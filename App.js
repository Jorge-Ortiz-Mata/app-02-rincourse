import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

const image = require('./assets/images/control.png') ;

export default function App() {

  return (
    <LinearGradient colors={['#CFFF8D', '#425F57']} style={styles.main}>
      <ImageBackground source={image} resizeMode='contain' style={styles.imageBack} imageStyle={styles.imageOpacity} >
        <StartGameScreen />
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
  imageOpacity: {
    opacity: 0.15
  }
});
