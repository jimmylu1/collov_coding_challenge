import React, { Component } from "react";
import List from "./List";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h2>Coding Challenge</h2>
        <div style={styles.container}>
          {lists.map((list) => (
            <List key={list.id} title={list.title} cards={list.cards} />
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    marginRight: 8,
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
