import { useEffect, useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utilities/Colors";
import LogsList from "../components/LogsList";
import PhoneNumber from "../components/PhoneNumber";
import UserNumber from "../components/UserNumber";
import { AntDesign, MaterialCommunityIcons  } from '@expo/vector-icons';

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

  useEffect(() => {
    if(numberSave === numberAnswer){
      changeScreen(3, numberSave, logsList)
    }
  }, [numberAnswer])

  return(
    <View>
      <View style={styles.firstContainer}>
        <Title>¡The game started!</Title>
        <UserNumber number={numberSave} />
        <View style={styles.secondContainer}>
          <PrimaryButton callBtn={decreaseGuessNumber}>
            <MaterialCommunityIcons name="minus-circle" size={30} color="black" />
          </PrimaryButton>
          <PhoneNumber number={numberAnswer} />
          <PrimaryButton callBtn={increaseGuessNumber}>
            <AntDesign name="pluscircle" size={30} color="black" />
          </PrimaryButton>
        </View>
      </View>

      <View style={styles.thirdContainer}>
        <Button title='Cancel' color={Colors.red.strong} onPress={backToScreen} />
      </View>
      <LogsList logs={logsList} />
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 20,
    marginVertical: 20,
  },
  secondContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 5
  },
  thirdContainer: {
    alignItems: 'center',
    marginVertical: 10
  }
});
