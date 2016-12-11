import React, { Component, PropTypes } from 'react';

import { Row } from 'react-bootstrap';

class ArticleBody extends Component {
  render () {
    const { article: {bodyText} } = this.props;

    return (
      <div style={{paddingTop: '30px'}}>
        {bodyText.split(/\n/).map((paragraph) => {
          return (
            <Row key={paragraph}><p>{paragraph}</p></Row>
          )
        })}
      </div>
    )
  }

  static propTypes = {
    article: PropTypes.object,
  }
}

export default ArticleBody;
