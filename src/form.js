import React from "react";
import "./App.css";

class Contactform extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("thanks for the submission. the page will now refresh.");
  }

  render() {
    return (
      <div>
        <form
          // action="https://send.pageclip.co/vKmFJdXlwFsRoY4Ue1mgG2qt2sLHMvqM"
          className="pageclip-form"
          method="post"
          data-netlify="true"
        >
          <input
            autoComplete="off"
            type="text"
            name="artist name"
            placeHolder="artist name"
          />
          <input
            autoComplete="off"
            type="text"
            name="music name"
            placeHolder="album or song name"
          />
          <input
            autoComplete="off"
            type="text"
            name="spotify link"
            placeHolder="spotify link"
          />
          <button
            type="submit"
            className="pageclip-form__submit form-button"
            onClick={this.handleClick}
          >
            <span>Send</span>
          </button>
        </form>
      </div>
    );
  }
}

export default Contactform;