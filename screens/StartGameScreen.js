import { View, StyleSheet, TextInput, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {

  return(
    <View style={styles.StartGameScreenContainer}>
      <View style={styles.firstSection}>
        <View>
          <Text style={styles.h1}>Add a number</Text>
        </View>
        <View>
          <TextInput style={styles.input} maxLength={2} autoComplete={false} keyboardType='number-pad' />
        </View>
        <View style={styles.buttonsSection}>
          <PrimaryButton>Reset</PrimaryButton>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  StartGameScreenContainer: {
    flex: 1,
  },
  firstSection: {
    marginTop: 100,
    marginHorizontal: 50,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#425F57',
  },
  h1: {
    fontWeight: '800',
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10
  },
  input: {
    width: '40%',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    textAlign: 'center',
    fontWeight: '800',
    color: '#fff',
    fontSize: 22,
    padding: 5,
    marginHorizontal: '30%'
  },
  buttonsSection:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  }
})
