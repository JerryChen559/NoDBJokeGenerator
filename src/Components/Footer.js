import React, { Component } from "react";
import "./Footer.css";
import axios from "axios";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      footerwords: "goodbye"
    };
  }

  // PUT:
  updateFooter(word) {
    axios.put(`/api/footer/`, { word }).then(response => {
      console.log(response);
      this.setState({ footerwords: response.data });
    });
  }

  render() {
    return (
      <div className="footer">
        <div onClick={() => this.updateFooter(this.state.footerwords)}>
          <p>{this.state.footerwords}</p>
        </div>
      </div>
    );
  }
}

export default Footer;
