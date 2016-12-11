import React, { Component, PropTypes } from 'react';

class AuthorPage extends Component {
  render () {
    const { bodyText } = this.props
    , bodyParagraphs = bodyText.split(/\n/);

    return (
      <div>
        {bodyParagraphs.map((paragraph) => {
          return (<p>{paragraph}</p>);
        })}
      </div>
    )
  }
  static propTypes = {
    bodyText: PropTypes.string,
  }
}

export default AuthorPage;
