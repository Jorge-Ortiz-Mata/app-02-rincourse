import { useState } from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utilities/Colors";

const StartGameScreen = ({changeScreen}) => {

  const [value, setValue] = useState('');

  function changeValue(value){
    setValue(value)
  }

  function callBtnAction(children){
    if(children === 'Reset'){
      setValue('');
    } else {
      const numberTypped = parseInt(value)

      if(isNaN(numberTypped) || numberTypped <= 0 || numberTypped > 99){
        Alert.alert(
          'Invalid Number!',
          'Number should be between 1 and 99',
          [{text: 'Ok', style: 'destructive', onPress: callBtnAction('Reset')}]
        )
        return;
      } else {
        changeScreen(2, numberTypped);
      }
    }
  }

  return(
    <View style={styles.StartGameScreenContainer}>
      <View style={styles.firstSection}>
        <View>
          <Text style={styles.h1}>Add a number</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems:'center'}}>
          <TextInput
            style={styles.input}
            maxLength={2}
            autoComplete='off'
            keyboardType='number-pad'
            value={value}
            onChangeText={changeValue}
          />
        </View>
        <View style={styles.buttonsSection}>
          <PrimaryButton callBtn={callBtnAction}>Reset</PrimaryButton>
          <PrimaryButton callBtn={callBtnAction}>Confirm</PrimaryButton>
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
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.green.strong,
  },
  h1: {
    fontWeight: '800',
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 10
  },
  input: {
    width: '40%',
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    textAlign: 'center',
    fontWeight: '800',
    color: Colors.white,
    fontSize: 22,
    padding: 5,
  },
  buttonsSection:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  }
})
