import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../utilities/Colors";

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
    backgroundColor: Colors.green.ligth,
  },
  pressedBtn: {
    backgroundColor: Colors.green.medium,
  },
  btnText: {
    fontWeight: '900',
    fontSize: 13
  },
})
