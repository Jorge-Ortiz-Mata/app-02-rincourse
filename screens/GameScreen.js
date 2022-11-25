import { View, StyleSheet, Text, Button } from "react-native";

const GameScreen = ({changeScreen}) => {

  function backToScreen(){
    changeScreen(0);
  }

  return(
    <View>
      <Text>Hello World</Text>
      <Button title='Exit' color={'#ff0000'} onPress={backToScreen} />
    </View>
  )
}

export default GameScreen;
