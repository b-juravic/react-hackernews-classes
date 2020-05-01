import React from 'react';
import Search from "./Search";
import './App.css';
import axios from "axios";
import StoryList from "./StoryList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { storyList: [],
                   loading: true
                  };
    this.boundSubmitSearch = this.submitSearch.bind(this);
  }

  componentDidMount() {
    this.hackerNewsRequest("react");
  }

  submitSearch(term){
    this.hackerNewsRequest(term);
  }

  async hackerNewsRequest(searchTerm) {
    try {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`);
      const hits = response.data.hits;
      this.setState({storyList: hits, loading: false});
    } catch(err) {
      console.log("API request error: ", err.message);
    }
  }

  render() {
    return (
      <div className="App">
        <Search submit={this.boundSubmitSearch} />
        {this.state.loading
          ? "Loading!"
          : <StoryList stories={this.state.storyList}/>}
      </div>
    );
  }

}

export default App;
