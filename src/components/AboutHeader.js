import React, { Component, PropTypes } from 'react';

class AboutHeader extends Component {
  render () {
    const {
      headingText,
      picture,
    } = this.props;

    return (
      <div style={{textAlign: 'center'}}>
        <h1>{headingText}</h1>
        <img src={picture} role='presentation' />
      </div>
    )
  }

  static propTypes = {
    headingText: PropTypes.string,
    picture: PropTypes.string,
  }
}

export default AboutHeader;
