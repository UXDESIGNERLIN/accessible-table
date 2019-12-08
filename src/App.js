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
// myRef = null;

 setRef = (e) => {
   this.myRef=e
 }
 
 // sourceRef = React.createRef();
 // targetRef = React.createRef();

   defaultProps = {
   ref: this.myRef,
   
   // ref: this.setRef,
    //:()=>{
    //  React.createRef()
  //  },
    //ref1:React.createRef(),
    onMouseDown : (e)=>{
      
      
      this.setState({mouseDown: true})
      this.myRef.current.blur();
      console.log("testing", this.state, e);
    },

    onMouseUp : () => {
      console.log("testUp", this.state);
      this.defaultProps.ref.current.blur();
      //this.setState({mouseDown:false})
    },

    onFocus : () => {
      console.log("testFocus",this.state);
      if(this.state.mouseDown) {
        this.defaultProps.ref.current.blur()
      }
     // this.setState({mouseDown: false})
     //else this.myRef.current.focus();
     this.setState({mouseDown:false})
    }
    
  }
  

  
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
                <th tabIndex="0" scope="col"   {...this.defaultProps} >
                  Date
                </th>
                <th tabIndex="0" scope="col" >
                  Source language
                </th>
                <th tabIndex="0" scope="col"  {...this.defaultProps}>
                  Target language
                </th>
                <th tabIndex="0" scope="col"   >
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
