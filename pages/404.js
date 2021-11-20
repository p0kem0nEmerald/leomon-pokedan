/**
 * @file 404
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */

import * as React from "react";

import Router from "next/router";

export default class Error404 extends React.Component {
  componentDidMount = () => {
    Router.push("/");
  };

  render() {
    return <div />;
  }
}
