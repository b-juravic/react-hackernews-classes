import React from "react"

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    // in reality, these methods are typically named the same as below
    this.boundControlTerm = this.controlTerm.bind(this);
    this.boundSubmitForm = this.submitForm.bind(this);
  }

  controlTerm(evt) {
    this.setState({term: evt.target.value});
  }

  submitForm(evt) {
    evt.preventDefault();
    this.props.submit(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.boundSubmitForm}>
        <label>Search Hacker News:
          <input
            type="text"
            value={this.state.term}
            onChange={this.boundControlTerm}
          ></input>
        </label>
        <button>Search</button>
      </form>
    )
  }

}

export default Search;