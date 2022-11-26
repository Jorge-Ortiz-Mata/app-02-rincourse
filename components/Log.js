import { View, Text, StyleSheet } from "react-native";
import Colors from "../utilities/Colors";

const Log = ({log}) => {

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Log: {log.id}, the phone's answer was: {log.num}</Text>
    </View>
  )
}

export default Log;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green.strong,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold'
  }
})
