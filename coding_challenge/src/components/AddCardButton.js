import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Textarea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { addCard } from "../actions";

class AddCardButton extends Component {
  state = {
    formOpen: false,
    text: "",
  };

  addButton = () => {
    const { openForm } = this;
    return (
      <div style={styles.button} onClick={openForm}>
        <Icon>add</Icon>
        <p>{"Add Candidate"}</p>
      </div>
    );
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleAddCandidate = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: "",
      });
      dispatch(addCard(text));
    }
  };

  addForm = () => {
    const { closeForm, handleInputChange, handleAddCandidate } = this;
    const { text } = this.state;
    const placeHolder = "Enter Candidate Name";
    return (
      <div>
        <Card style={styles.card}>
          <Textarea
            placeholder={placeHolder}
            autoFocus
            onBlur={closeForm}
            value={text}
            onChange={handleInputChange}
            style={styles.textArea}
          />
        </Card>
        <Button
          variant="contained"
          style={styles.formButton}
          onMouseDown={handleAddCandidate}
        >
          Add a Candidate
        </Button>
      </div>
    );
  };

  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeForm = (e) => {
    this.setState({
      formOpen: false,
    });
  };

  render() {
    const { formOpen } = this.state;
    const { addButton, addForm } = this;
    return formOpen ? addForm() : addButton();
  }
}

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 37,
    width: 272,
    paddingLeft: 10,
  },
  card: {
    overflow: "visible",
    minHeight: 60,
    minWidth: 20,
    padding: "6px 8px 2px",
  },
  textArea: {
    resize: "none",
    width: "100%",
    outline: "none",
    border: "none",
    overflow: "hidden",
  },
  formButton: { color: "white", backgroundColor: "#5aac44" },
};

export default AddCardButton;
