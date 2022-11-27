import { StyleSheet, View, Text, Button, Image } from "react-native";
import Title from "../components/Title";
import UserNumber from "../components/UserNumber";
import Colors from "../utilities/Colors";

const GameOver = ({numberSave, allLogs, changeScreen}) => {

  function backToScreen(){
    changeScreen(1, 0, []);
  }

  return(
    <View style={styles.container}>
      <Title>¡¡THE PHONE GUEESED!!</Title>
      <Image source={require('../assets/images/gameover.png')} style={styles.image} />
      <Text style={styles.info}>Your phone made: {allLogs.length} intents to guess your number: {numberSave}</Text>
      <View>
        <Button title='Play again' color={Colors.blue.strong} onPress={backToScreen} />
      </View>
    </View>
  )
}

export default GameOver;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  image: {
    width: '80%',
    height: '31%',
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 30
  },
  info: {
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 18
  }
})
