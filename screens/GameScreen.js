import { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utilities/Colors";

const GameScreen = ({changeScreen, numberSave}) => {

  const [maxNumber, setMaxNumber] = useState(99);
  const [minNumber, setMinNumber] = useState(1);
  const [phoneIntents, setPhoneIntents] = useState(0);
  const [numberAnswer, setNumberAnswer] = useState('');
  const [logsList, setLogsList] = useState([])

  function backToScreen(){
    changeScreen(0, 0);
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
      {id: phoneIntents, text: `The Phone answer was ${phoneNumber}`}
    ])
  }

  numberSave === numberAnswer ? console.log('Yes') : console.log('Not yet...')

  return(
    <View>
      <View>
        <Title>¡The game started!</Title>
      </View>
      <View>
        <Text>You Typped: {numberSave}</Text>
      </View>
      <View>
        <Text>Phone's Answer: {numberAnswer}</Text>
      </View>
      <View>
        <PrimaryButton callBtn={increaseGuessNumber}>+</PrimaryButton>
        <PrimaryButton callBtn={decreaseGuessNumber}>-</PrimaryButton>
      </View>
      <View>
        <Text>Phone intents.</Text>
        <View>
          {
            logsList.map (log => {
              return(
                <Text>{log.text}</Text>
              )
            })
          }
        </View>
      </View>
      <View>
        <Button title='Exit' color={Colors.red.strong} onPress={backToScreen} />
      </View>
    </View>
  )
}

export default GameScreen;
