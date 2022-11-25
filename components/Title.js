import {Text, StyleSheet } from "react-native";
import Colors from "../utilities/Colors";

const Title = ({children}) => {

  return(
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: '900',
    fontSize: 25,
    textAlign: 'center',
    color: Colors.green.strong,
    padding: 10
  }
})
