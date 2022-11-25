import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({children, callBtn}) => {

  function callValue(){
    callBtn(children)
  }

  return(
    <View>
      <Pressable
        onPress={callValue}
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
