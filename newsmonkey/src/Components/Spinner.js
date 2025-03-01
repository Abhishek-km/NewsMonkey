import React, { Component } from "react";
import loading from "./spinner.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="text-center my-3">
          <img className="my-3" src={loading} alt="loading" />
        </div>
      </div>
    );
  }
}
