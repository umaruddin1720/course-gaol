import { StyleSheet, Text ,TouchableOpacity } from "react-native";


const GaolItem = props => {
  return (
      
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}
    style={styles.listItem}>
      <Text>{props.title}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#8717",
        borderWidth: 1,
        marginVertical: 10,
        color: "white",
      },

})
export default GaolItem;