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
  sourceRef = React.createRef();
  targetRef = React.createRef();

  
  

  handleMouseDown = () => {
   
    this.setState({mouseDown: true})
    this.myRef.current.blur();
    console.log("testing", this.myRef.current);
  }

  handleMouseUp = () => {
    console.log("testUp");
    this.myRef.current.blur();
   // if(this.state.mouseDown) {
     // this.myRef.current.blur()
  //  }
  }

  handleFocus = () => {
    console.log("testFocus");
    if(this.state.mouseDown) {
      this.myRef.current.blur()
    }
   // this.setState({mouseDown: false})
   else this.myRef.current.focus();
   this.setState({mouseDown:false})
  }

  /*handleFocus = () => {
    this.setState({ styleFocus: !this.state.styleFocus });
  };*/
  render() {
    const { name, date, sourceLang, targetLang } = this.state;
    return (
      <div className="App">
        <head>
          <h1>table</h1>
        </head>
        <body>
          <table
            
            tabIndex="0"
            style={{ width: "80%" }}
            summary={"translated files row"}
          >
            <thead>
              <tr>
                <th tabIndex="0" scope="col">
                  FileOrFolder
                </th>
                <th tabIndex="0" scope="col" 
                  
                >
                  Name
                </th>
                <th tabIndex="0" scope="col" ref={this.myRef} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onFocus={this.handleFocus} >
                  Date
                </th>
                <th tabIndex="0" scope="col" ref={this.sourceRef} onMouseDown={()=>{ this.setState({mouseDown: true})
    this.sourceRef.current.blur()}} onMouseUp={()=>{this.sourceRef.current.blur()}} onFocus={()=>{ if(this.state.mouseDown) {
      this.sourceRef.current.blur()
    }
   // this.setState({mouseDown: false})
   else this.sourceRef.current.focus();
   this.setState({mouseDown:false})}}>
                  Source language
                </th>
                <th tabIndex="0" scope="col" ref={this.targetRef} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onFocus={this.handleFocus}>
                  Target language
                </th>
                <th tabIndex="0" scope="col"  >
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
