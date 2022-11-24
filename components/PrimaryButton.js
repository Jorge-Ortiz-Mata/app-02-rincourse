import { View, Text, StyleSheet } from "react-native";

const PrimaryButton = ({children}) => {

  return(
    <View style={styles.btn}>
      <Text styles={styles.btnText}>{children}</Text>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#E1FFB1',
    padding: 10,
    borderRadius: 10
  },
  btnText: {
    fontWeight: '900',
    fontSize: 20
  }
})
