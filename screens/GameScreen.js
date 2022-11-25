import { useState } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utilities/Colors";
import LogsList from "../components/LogsList";
import PhoneNumber from "../components/PhoneNumber";

const GameScreen = ({changeScreen, numberSave}) => {

  const [maxNumber, setMaxNumber] = useState(99);
  const [minNumber, setMinNumber] = useState(1);
  const [phoneIntents, setPhoneIntents] = useState(1);
  const [numberAnswer, setNumberAnswer] = useState('');
  const [logsList, setLogsList] = useState([])

  function backToScreen(){
    changeScreen(1, 0, []);
  }

  function guessNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    if(randomNumber === 0){
      guessNumber(minNumber, maxNumber)
    }

    setPhoneIntents(phoneIntents + 1);
    setNumberAnswer(randomNumber);
    addLogToList(randomNumber);
  }

  function increaseGuessNumber(){
    guessNumber(numberAnswer, maxNumber);
    setMinNumber(numberAnswer);
  }

  function decreaseGuessNumber(){
    guessNumber(minNumber, numberAnswer);
    setMaxNumber(numberAnswer);
  }

  function addLogToList(phoneNumber){
    setLogsList((currentList) => [
      ...currentList,
      {id: phoneIntents, num: phoneNumber}
    ])
  }

  numberSave === numberAnswer ? changeScreen(3, numberSave, logsList) : console.log('Not yet...')

  return(
    <View>
      <View>
        <Title>¡The game started!</Title>
      </View>
      <View>
        <Text>You Typped: {numberSave}</Text>
      </View>
      <PhoneNumber number={numberAnswer} />
      <View>
        <PrimaryButton callBtn={increaseGuessNumber}>+</PrimaryButton>
        <PrimaryButton callBtn={decreaseGuessNumber}>-</PrimaryButton>
      </View>
      <View>
        <Button title='Exit' color={Colors.red.strong} onPress={backToScreen} />
      </View>
        <LogsList logs={logsList} />
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({})
