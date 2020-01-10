import React, { Component } from "react";

class Input extends Component {
  render() {
    const content = this.props.success ? null : (
      <form>
        <input
          data-test="input-control"
          type="text"
          placeholder="enter guess"
        />
        <button data-test="submit-button" type="submit">
          Submit
        </button>
      </form>
    );

    return <div data-test="component-input">{content}</div>;
  }
}

export default Input;
