import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({children, resetValueButton}) => {

  function resetValue(){
    resetValueButton();
  }

  return(
    <View>
      <Pressable
        onPress={resetValue}
        style={(pressData) =>
          pressData.pressed
          ? [styles.pressedBtn, styles.generalPressedBtn]
          : [styles.noPressedBtn, styles.generalPressedBtn]
      }>
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  generalPressedBtn: {
    padding: 10,
    borderRadius: 5
  },
  noPressedBtn: {
    backgroundColor: '#E1FFB1',
  },
  pressedBtn: {
    backgroundColor: '#749F82',
  },
  btnText: {
    fontWeight: '900',
    fontSize: 13
  },
})
