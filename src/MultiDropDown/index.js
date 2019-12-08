import React, { Component } from "react";
import "./style.css";

class MultiDropDown extends Component {
  state = {
    mainMenu: false,
    subMenu: false
  }
  
  openMainMenu = () => {
    this.setState({mainMenu:!this.state.mainMenu})
  }

  openSubMenu = () => {
    this.setState({subMenu:true})
  }
  closeSubMenu= () => {
    this.setState({subMenu:!this.state.subMenu})
  }
  render() {
    return (
      <React.Fragment>
      <div tabIndex="0" className="dropdown" onClick={this.openMainMenu}>
      chialingho@translations.com</div>
      {this.state.mainMenu && <ul tabIndex="0" className="menu main-menu">
      <li tabIndex="0" onFocus={this.openSubMenu} onClick={this.closeSubMenu}>Languages
            {this.state.subMenu && <ul  className="menu sub-menu">
              <li tabIndex="0">English</li>
              <li tabIndex="0">Spanish</li>
              <li tabIndex="0">German</li>
              <li tabIndex="0">English</li>
              <li tabIndex="0">Spanish</li>
              <li tabIndex="0">German</li>
            </ul>}
          </li>
          <li tabIndex="0">Logout</li>
          <li tabIndex="0" className="middle">Account Setting</li>
         
      </ul>}
    
   </React.Fragment>
 
    );
  }
}

export default MultiDropDown;
