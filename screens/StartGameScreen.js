import { useState } from "react";
import { View, StyleSheet, TextInput, Text, Alert, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utilities/Colors";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const StartGameScreen = ({changeScreen}) => {
  const [value, setValue] = useState('');
  const {width, height} = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    'relay-regular': require('../assets/fonts/Raleway_400Regular.ttf')
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

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
        changeScreen(2, numberTypped, []);
      }
    }
  }

  return(
    <ScrollView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior='position'>
        <View style={[styles.StartGameScreenContainer, {marginTop: width < 700 ? 100 : 70}, {marginHorizontal: height < 700 ? 220 : 30}]}>
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
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen;

const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  StartGameScreenContainer: {
    flex: 1,
  },
  firstSection: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.green.strong,
    marginHorizontal: 20
  },
  h1: {
    fontSize: Platform.select({ios: 28, android: 32}),
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'relay-regular',
    fontWeight: '600'
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
