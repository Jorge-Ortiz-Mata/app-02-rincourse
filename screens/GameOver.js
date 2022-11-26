import { StyleSheet, View, Text, Button } from "react-native";
import Title from "../components/Title";
import UserNumber from "../components/UserNumber";
import Colors from "../utilities/Colors";

const GameOver = ({numberSave, allLogs, changeScreen}) => {

  function backToScreen(){
    changeScreen(1, 0, []);
  }

  return(
    <View>
      <Title>¡¡THE PHONE GUEESED!!</Title>
      <UserNumber number={numberSave} />
      <Text>------------</Text>
      {
        allLogs.map(log => {
          return(
            <Text>
              {log.id} - {log.num}
            </Text>
          )
        })
      }
      <Text>------------</Text>
      <Text>
        {allLogs.length}
      </Text>
      <View>
        <Button title='Exit' color={Colors.red.strong} onPress={backToScreen} />
      </View>
    </View>
  )
}

export default GameOver;

const styles = StyleSheet.create({})
