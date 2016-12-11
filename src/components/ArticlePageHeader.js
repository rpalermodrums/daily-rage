import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ArticlePageHeader extends Component {
  render () {
    const { article: {title, picture, authorName}, imageStyle } = this.props;

    return (
      <div style={{textAlign: 'center'}}>
        <h2>{title}</h2>
        <h4><Link to='/authors'>{authorName}</Link></h4>
        {picture && <img style={imageStyle} role='presentation' src={picture} />}
      </div>
    )
  }
  static propTypes = {
    article: PropTypes.object,
    imageStyle: PropTypes.object,
  }
}

export default ArticlePageHeader;
