import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';

const Welcome = () => {

  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.h1}>Hello World</Text>
    </View>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  welcomeContainer: {
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
