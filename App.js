import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

const image = require('./assets/images/control.png') ;

export default function App() {
  const [screenNumber, setScreen] = useState(1);
  let screen;

  const [number, setNumber] = useState(0);
  const [AllLogsList, setAllLogsList] = useState([]);

  function changeScreenValue(screenIndex, numberTypped, logsList){
    setNumber(numberTypped);
    setScreen(screenIndex);
    setAllLogsList(logsList);
  }

  switch(screenNumber){
    case 1:
      screen = <StartGameScreen changeScreen={changeScreenValue} />
      break;
    case 2:
      screen = <GameScreen
        numberSave={number}
        changeScreen={changeScreenValue} />
      break;
    case 3:
      screen = <GameOver
        numberSave={number}
        allLogs={AllLogsList}
        changeScreen={changeScreenValue} />
  }

  return (
    <LinearGradient colors={['#CFFF8D', '#425F57']} style={styles.main}>
      <ImageBackground source={image} resizeMode='contain' style={styles.imageBack} imageStyle={styles.imageOpacity} >
        <SafeAreaView style={styles.main}>
        {screen}
        </SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const dimensionsWidth = Dimensions.get('screen').width

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
