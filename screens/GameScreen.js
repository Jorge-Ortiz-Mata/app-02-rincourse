import { View, StyleSheet, Text, Button } from "react-native";
import Title from "../components/Title";

const GameScreen = ({changeScreen}) => {

  function backToScreen(){
    changeScreen(0);
  }

  return(
    <View>
      <View>
        <Title>¡The game started!</Title>
      </View>
      <View>
        <Button title='Exit' color={'#ff0000'} onPress={backToScreen} />
      </View>
    </View>
  )
}

export default GameScreen;
