import { View, StyleSheet, TextInput, Text } from "react-native";

const StartGameScreen = () => {

  return(
    <View style={styles.StartGameScreenContainer}>
      <Text style={styles.h1}>
        Start the game!
      </Text>
      <View>
      </View>
    </View>

  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  StartGameScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  h1: {
    fontWeight: '800',
    fontSize: 28,
    color: '#ffffff'
  }
})
