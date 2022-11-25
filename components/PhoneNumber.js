import { View, Text, StyleSheet } from "react-native";
import Colors from "../utilities/Colors";

const PhoneNumber = ({number}) => {

  return(
    <View>
      <Text>Phone's Answer: {number}</Text>
    </View>
  )
}

export default PhoneNumber;

const styles = StyleSheet.create({})
