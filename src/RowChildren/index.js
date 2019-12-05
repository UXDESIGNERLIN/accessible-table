import React, { Component } from "react";

class RowChildren extends Component {
  render() {
    return (
      <tr scope="row" onClick={this.handleExpand}>
        <td tabIndex="0" colSpan="1">
          {this.props.data.fileName}
        </td>
        <td tabIndex="0" colSpan="4">
          {this.props.data.type}
        </td>
        <td tabIndex="0"></td>
      </tr>
    );
  }
}

export default RowChildren;
