import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../utilities/Colors";

const Log = ({log}) => {

  const {width} = useWindowDimensions();

  return(
    <View style={[styles.container, {marginHorizontal: width < 400 ? 10 : 200}]}>
      <Text style={styles.text}>Log: {log.id}, the phone's answer was: {log.num}</Text>
    </View>
  )
}

export default Log;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green.strong,
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center'
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold'
  }
})
