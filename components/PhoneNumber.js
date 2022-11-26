import { View, Text, StyleSheet } from "react-native";
import Colors from "../utilities/Colors";

const PhoneNumber = ({number}) => {

  return(
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.text}>Phone's Answer</Text>
    </View>
  )
}

export default PhoneNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontWeight: '700',
    fontSize: 55
  },
  text: {
    fontWeight: 'bold'
  },
})
