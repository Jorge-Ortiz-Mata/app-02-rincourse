import { View, Text, StyleSheet, FlatList } from "react-native";
import Log from '../components/Log'
import Colors from "../utilities/Colors";

const LogsList = ({logs}) => {

  return(
    <View>
      <FlatList data={logs}
        keyExtractor={(log, index) => {
          return log.id
        }}
        renderItem={(logData) => {
          return <Log log={logData.item} />
        }}
      />
    </View>
  )
}

export default LogsList;

const styles = StyleSheet.create({})

