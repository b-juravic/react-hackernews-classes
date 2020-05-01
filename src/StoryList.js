import React from 'react';
import Story from "./Story";

class StoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.stories.map(story => (
          <Story
            key={story.objectID}
            title={story.title}
            url={story.url}
          />
        ))}
      </ul>
    );
  }

}

export default StoryList;