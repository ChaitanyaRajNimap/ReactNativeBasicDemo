import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(newText) {
    setEnteredGoal(newText);
  }

  function addGoalHandler() {
    setCourseGoals([
      ...courseGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          // onChange={(newText) => goalInputHandler(newText)}
          onChangeText={(newText) => goalInputHandler(newText)}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* <ScrollView>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalStyle}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalStyle}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 20,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 24,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    width: "70%",
    padding: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
  },
  goalsContainer: {
    flex: 5,
  },
  goalStyle: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#5e0acc",
    borderRadius: 7,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
