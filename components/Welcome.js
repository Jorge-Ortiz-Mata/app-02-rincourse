import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Pressable, Image } from 'react-native';

const Welcome = () => {

  const [value, setValue] = useState(true);

  function setModal(){
    setValue(false)
  }

  return(
    <Modal visible={value} animationType='fade' >
      <View style={styles.container}>
        <View>
          <Image source={require('../assets/images/spide.png')} style={styles.image} />
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.h1}>This is the RIN App</Text>
          <Text style={styles.text}>Your mobile phone must know the number you typped.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={setModal} style={styles.btn}>
            <Text>Let's get started</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C254D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 150
  },
  welcomeContainer: {
    alignItems: 'center'
  },
  h1: {
    color: '#ffffff',
    fontWeight: '900',
    margin: 10,
    fontSize: 30
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center'
  },
  buttonContainer: {
    alignItems: 'center'
  },
  btn: {
    borderWidth: 0,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 10,
  },
});
