import { View, Text, StyleSheet } from "react-native";
import Colors from "../utilities/Colors";

const Log = ({log}) => {

  return(
    <View>
      <Text>Log: {log.id}, the phone's answer was: {log.num}</Text>
    </View>
  )
}

export default Log;

const styles = StyleSheet.create({})
