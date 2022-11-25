import { useState } from 'react';
import { StyleSheet, ImageBackground, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const image = require('./assets/images/control.png') ;

export default function App() {
  const [screenNumber, setScreen] = useState(0);
  let screen;

  function changeScreenValue(number){
    setScreen(number);
  }

  switch(screenNumber){
    case 1:
      screen = <GameScreen changeScreen={changeScreenValue} />
      break;
    default:
      screen = <StartGameScreen changeScreen={changeScreenValue} />
  }

  return (
    <LinearGradient colors={['#CFFF8D', '#425F57']} style={styles.main}>
      <ImageBackground source={image} resizeMode='contain' style={styles.imageBack} imageStyle={styles.imageOpacity} >
        {screen}
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
