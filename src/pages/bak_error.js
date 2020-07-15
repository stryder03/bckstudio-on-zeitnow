import React, {Component} from "react";
import Router from "next/router";

export default class bak_error extends Component {

  componentDidMount = () => {
    Router.push("/index");
  };

  render() {
    return <div />;
  }
}
