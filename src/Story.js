import React from 'react';

class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <a href={this.props.url}>{this.props.title}</a>
      </li>
    );
  }
}

export default Story;

