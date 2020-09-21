import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "../../actions/todoActions";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";

import AddToDo from "../AddToDo";
import Visibility from "../Visibility";
import ToDoList from "../ListToDo";
import { getTodos } from "../../api";

class Main extends Component {
  async componentDidMount() {
    const { actions } = this.props;
    const result = await getTodos(
      actions.fetchTodosRequest,
      actions.fetchTodosFailure
    );
    actions.loadTodos(result);
  }

  render() {
    const { isFetching, error } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        {isFetching ? (
          <ActivityIndicator style={styles.loadingWrapper} size="large" />
        ) : error ? (
          <Text style={styles.errorMessageWrapper}>{error}</Text>
        ) : (
          <ScrollView>
            <AddToDo {...this.props} />
            <Visibility {...this.props} />
            <ToDoList {...this.props} />
          </ScrollView>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f7ff",
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  errorMessageWrapper: {
    marginTop: 20,
    textAlign: "center",
    display: "flex",
    fontWeight: "600",
  },
});

Main.propTypes = {
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    todos: state.todos.todos,
    isFetching: state.todos.isFetching,
    visibilityFilter: state.visibilityFilter,
    error: state.todos.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
