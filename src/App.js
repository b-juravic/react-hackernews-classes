import React from 'react';
import Search from "./Search";
import './App.css';
import axios from "axios";
import StoryList from "./StoryList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { storyList: [] };
    this.boundSubmitSearch = this.submitSearch.bind(this);
  }

  async submitSearch(term){
    try {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${term}`)
      const hits = response.data.hits;
      this.setState({storyList: hits});
    } catch(err) {
      console.log("API request error: ", err.message);
    }

  }

  render() {
    return (
      <div className="App">
        <Search submit={this.boundSubmitSearch} />
        <StoryList stories={this.state.storyList}/>
      </div>
    );
  }

}

export default App;
