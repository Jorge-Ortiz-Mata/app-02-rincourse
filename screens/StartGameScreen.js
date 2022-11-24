import { View, StyleSheet, TextInput, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {

  return(
    <View style={styles.StartGameScreenContainer}>
      <Text style={styles.h1}>
        Start the game!
      </Text>
      <View style={styles.secondContainer}>
        <TextInput style={{backgroundColor: '#ffffff', width: 50}} />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  StartGameScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#594545'
  },
  h1: {
    fontWeight: '800',
    fontSize: 28,
    color: '#ffffff'
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2
  }
})
