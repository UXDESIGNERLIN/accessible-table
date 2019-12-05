import React, { Component } from "react";
import RowChildren from "../RowChildren";

class Rows extends Component {
  state = {
    expand: false
  };

  handleExpand = () => {
    console.log("expoand", this.props.data.name);
    this.props.data.files && this.setState({ expand: !this.state.expand });
  };
  render() {
    return (
      <React.Fragment>
        <tr scope="row" onClick={this.handleExpand}>
          <td tabIndex="0">{this.props.data.files ? "Folder" : "File"}</td>
          <td tabIndex="0">{this.props.data.name}</td>
          <td tabIndex="0">{this.props.data.date}</td>
          <td tabIndex="0">{this.props.data.sourceLang}</td>
          <td tabIndex="0">{this.props.data.targetLang}</td>
          <td tabIndex="0"></td>
        </tr>
        {this.state.expand &&
          this.props.data.files.map((subFiles, i) => (
            <RowChildren key={i} data={subFiles} />
          ))}
      </React.Fragment>
    );
  }
}

export default Rows;
