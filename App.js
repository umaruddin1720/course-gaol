
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import GaolItem from "./component/GaolItem";

export default function App() {
  const [inputgaol, setInputGaol] = useState("");
  const [courselist, setCourseList] = useState([]);

  const inputgaolHandler = (text) => {
    setInputGaol(text);
  };

  const goalhandler = () => {
    setCourseList((courselist) => [
      ...courselist,
      { id: Math.random().toString(), value: inputgaol },
    ]);
  };
  
  const RemovalGaol = gaolId =>{
    setCourseList(courselist =>{
      return courselist.filter((gaol) => gaol.id !== gaolId);
    });
  }


  return (
    <View style={styles.screen}>
      <View style={styles.inputveiw}>
        <TextInput
          placeholder="course gaol"
          style={styles.input}
          onChangeText={inputgaolHandler}
          value={inputgaol}
        />
        <Button title="Add" onPress={goalhandler} />
      </View>

      <FlatList
      keyExtractor={(key,idex)=>{
        key.id
      }}
        data={courselist}

        renderItem={(itemdata) => <GaolItem id={itemdata.item.id} onDelete={RemovalGaol} title={itemdata.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 70,
  },
  inputveiw: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,

    width: "80%",
    padding: 10,
  },

});
