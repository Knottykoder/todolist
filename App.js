import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
export default function App() {
  const [task, settask] = useState("");
  const [taskitems, settaskitems] = useState([]);
  const handletask = () => {
    Keyboard.dismiss()
    settaskitems([...taskitems, task]);
    settask("");
  };

  const completetask=(index)=>{
    let itemscopy =[...taskitems]
    itemscopy.splice(index,1)
    settaskitems(itemscopy)
  }

  return (
    <View style={styles.container}>
      <View style={StyleSheet.taskWrapper}>
        <Text style={styles.sectionTitle}>To Do List</Text>
        <View style={styles.items}>
          {taskitems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={()=>completetask(index)}> 
              <Task  text={item} />

              </TouchableOpacity>
            ) 
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "height" : "padding"}
        style={styles.writetaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a Task"
          value={task}
          onChangeText={(text) => settask(text)}
        />
        <TouchableOpacity onPress={() => handletask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop:60,
    padding:20,
  },
  items: {
    marginTop: 30,
  },
  writetaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft:10,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addtext: {},
});
