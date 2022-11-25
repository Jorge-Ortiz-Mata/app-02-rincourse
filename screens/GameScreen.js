import { View, StyleSheet, Text, Button } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utilities/Colors";

const GameScreen = ({changeScreen, numberSave}) => {

  function backToScreen(){
    changeScreen(0, 0);
  }

  function callBtn(){
    console.log('Hello World')
  }

  return(
    <View>
      <View>
        <Title>¡The game started!</Title>
      </View>
      <View>
        <Text>{numberSave}</Text>
      </View>
      <View>
        <PrimaryButton callBtn={callBtn}>+</PrimaryButton>
        <PrimaryButton callBtn={callBtn}>-</PrimaryButton>
      </View>
      <View>
        <Button title='Exit' color={Colors.red.strong} onPress={backToScreen} />
      </View>
    </View>
  )
}

export default GameScreen;
