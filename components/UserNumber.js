import { View, Text, StyleSheet } from "react-native";
import Colors from "../utilities/Colors";

const UserNumber = ({number}) => {

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Your number: {number}</Text>
    </View>
  )
}

export default UserNumber;

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems: 'center',
    marginVertical: 5
  },
  text: {
    fontWeight: 'bold'
  }
});
