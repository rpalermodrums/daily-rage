import React, { Component, PropTypes } from 'react';

class ArticlePageHeader extends Component {
  render () {
    const { article: {title, picture}, imageStyle } = this.props;

    return (
      <div style={{textAlign: 'center'}}>
        <h2>{title}</h2>
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
