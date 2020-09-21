import PropTypes from "prop-types";
import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import plusIcon from "../../icons/plus.png";
import ButtonIcon from "../Buttons/ButtonIcon";

class AddToDo extends Component {
  state = {
    textValue: "",
  };

  onSubmitEditing = () => {
    const { actions } = this.props;
    if (this.state.textValue.trim() !== "" && this.state.textValue.length > 0) {
      actions.addTodo(this.state.textValue);
    }
    this.setState({ textValue: "" });
  };

  onChangeText = (value) => {
    this.setState({ textValue: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          autoCorrect={false}
          placeholder="Add an item..."
          underlineColorAndroid="transparent"
          value={this.state.textValue}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}
        />
        <ButtonIcon
          onPress={this.onSubmitEditing}
          source={plusIcon}
          style={styles.plusButton}
          width={30}
          height={30}
        />
      </View>
    );
  }
}

// functional component
/*const AddToDo = (props) => {
  const { actions } = props;

  let textInput;
  let textValue = "";

  const _onSubmitEditing = () => {
    if (textValue.trim() !== "" && textValue.length > 0) {
      actions.addTodo(textValue);
    }
    textInput && textInput.clear();
  };

  const _onChangeText = (text) => (textValue = text);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCorrect={false}
        placeholder="Add an item..."
        underlineColorAndroid="transparent"
        returnKeyType="done"
        onChangeText={_onChangeText}
        onSubmitEditing={_onSubmitEditing}
        ref={(el) => (textInput = el)}
      />
      <ButtonIcon
        onPress={_onSubmitEditing}
        source={plusIcon}
        style={styles.plusButton}
        width={30}
        height={30}
      />
    </View>
  );
}; */

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  plusButton: {
    marginLeft: 10,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    alignSelf: "center",
    height: 40,
    paddingLeft: 10,
    color: "white",
    borderRadius: 2,
  },
});

AddToDo.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default AddToDo;
