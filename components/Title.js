import {Text, StyleSheet } from "react-native";

const Title = ({children}) => {

  return(
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: '900',
    fontSize: 25,
    textAlign: 'center',
    color: '#425F57',
    padding: 10
  }
})
