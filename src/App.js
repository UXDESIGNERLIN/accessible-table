import React, { Component } from "react";
import Rows from "./Rows";
import "./App.css";
import MultiDropDown from "./MultiDropDown";
import { RowForward } from "./RowsForward";

class App extends Component {
  
  state = {
    submissions: [
      {
        name: "cat",
        date: 12234,
        sourceLang: "en",
        targetLang: "to"
      },
      {
        name: "pig",
        date: 3456,
        sourceLang: "ko",
        targetLang: "op",
        files: [{ fileName: "piggy", type: "small" }]
      },
      {
        name: "fish",
        date: 3456,
        sourceLang: "ko",
        targetLang: "op"
      },
      {
        name: "dog",
        date: 3456,
        sourceLang: "ko",
        targetLang: "op",
        files: [
          { fileName: "doggy", type: "small" },
          { fileName: "puppy", type: "supersmall" }
        ]
      },
      {
        name: "spider",
        date: 3456,
        sourceLang: "ko",
        targetLang: "op"
      }
    ],
    styleFocus: false,
    mouseDown: false
  };

  myRef = React.createRef();
  

  

  testRef = () => {
   
    this.setState({mouseDown: true})
    this.myRef.current.blur();
    console.log("testing", this.myRef.current);
  }

  testTwo = () => {
    console.log("testUp");
    this.myRef.current.blur();
   // if(this.state.mouseDown) {
     // this.myRef.current.blur()
  //  }
  }

  testThree = () => {
    console.log("testFocus");
    if(this.state.mouseDown) {
      this.myRef.current.blur()
    }
   // this.setState({mouseDown: false})
   else this.myRef.current.focus();
   this.setState({mouseDown:false})
  }

  keyDown = () => {
    this.myRef.current.focus()
  }
  

  handleFocus = () => {
    this.setState({ styleFocus: !this.state.styleFocus });
  };
  render() {
    const { name, date, sourceLang, targetLang } = this.state;
    return (
      <div className="App">
        <head>
          <h1>table</h1>
        </head>
        <body>
          <table
            className="focus"
            tabIndex="0"
            style={{ width: "80%" }}
            summary={"translated files row"}
          >
            <thead>
              <tr>
                <th tabIndex="0" scope="col">
                  FileOrFolder
                </th>
                <th
                  style={this.state.styleFocus ? { outline: "none" } : {}}
                  tabIndex="0"
                  scope="col"
                  className="cell"
                  onClick={this.handleFocus}
                >
                  Name
                </th>
                <th tabIndex="0" scope="col" className="focus"   ref={this.myRef} onMouseDown={this.testRef} onMouseUp={this.testTwo} onFocus={this.testThree} >
                  Date
                </th>
                <th tabIndex="0" scope="col" className="focus" >
                  Source language
                </th>
                <th tabIndex="0" scope="col" className="focus">
                  Target language
                </th>
                <th tabIndex="0" scope="col" className="focus" >
                  functionality
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.submissions.map((submission, i) => (
                <Rows
                  tabIndex="0"
                  key={i}
                  data={submission}
                  //name={name}
                  //date={date}
                  // sourceLang={sourceLang}
                  //targetLang={targetLang}
                />
              ))}
            </tbody>
          </table>
          <hr />
          
          <MultiDropDown />
        </body>
      </div>
    );
  }
}


export default App;
