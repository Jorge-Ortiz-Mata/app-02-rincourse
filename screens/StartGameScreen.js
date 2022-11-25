import { useState } from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {

  const [value, setValue] = useState('');

  function changeValue(value){
    setValue(value)
  }

  function callBtnAction(children){
    if(children === 'Reset'){
      setValue('');
    } else {
      const number = parseInt(value)

      if(isNaN(number) || number <= 0 || number > 99){
        Alert.alert(
          'Invalid Number!',
          'Number should be between 1 and 99',
          [{text: 'Ok', style: 'destructive', onPress: callBtnAction('Reset')}]
        )
        return;
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
  },
  buttonsSection:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  }
})
