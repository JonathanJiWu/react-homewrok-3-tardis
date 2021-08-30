import React, { Component } from "react";

export default class DivThree extends Component {
  state = {
    tardis: {
      name: "Time and Relative Dimension in Space",
      cap: false,
    },
  };
  changeIt = (text) => {
    if (this.state.tardis.cap) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          cap: false,
        },
      });
    } else {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          cap: true,
        },
      });
    }
  };
  render() {
    return (
      <div className="divs">
        <h3 onClick={() => this.changeIt(this.state.tardis.name)}>
          {this.state.tardis.name}
        </h3>
      </div>
    );
  }
}
