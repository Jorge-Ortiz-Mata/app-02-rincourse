import { StyleSheet, View, Text, Button, Image, useWindowDimensions } from "react-native";
import Title from "../components/Title";
import UserNumber from "../components/UserNumber";
import Colors from "../utilities/Colors";

const GameOver = ({numberSave, allLogs, changeScreen}) => {
  const {width, height} = useWindowDimensions();

  function backToScreen(){
    changeScreen(1, 0, []);
  }

  return(
    <View style={styles.container}>
      <Title>¡¡THE PHONE GUEESED!!</Title>
      <Image source={require('../assets/images/gameover.png')} style={[styles.image, {width: width < 400 ? 250 : 120}, {height: height > 400 ? 250 : 120}]} />
      <Text style={[styles.info, {marginHorizontal: width < 400 ? 10 : 100}]}>Your phone made: {allLogs.length} intents to guess your number: {numberSave}</Text>
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
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 30
  },
  info: {
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 18,
  }
})
