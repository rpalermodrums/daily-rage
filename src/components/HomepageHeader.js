import React, {Component, PropTypes} from 'react';
// import { observable } from 'mobx';
// import { observer } from 'mobx-react';

class HomepageHeader extends Component {
  render () {
    const { imageStyle } = this.props;

    return (
      <div style={{textAlign: 'center'}}>
        <h2 className="homepage-title">The Daily Rage</h2>
        <img
          role="presentation"
          src="http://frederatorblogs.com/random/files/2008/04/b-corrupted-by-random-noise-bit-error-rate0020.gif"
          className="homepage-picture"
          style={imageStyle}
          />
      </div>
    );
  }

  static propTypes = {
    imageStyle: PropTypes.object,
  }
}

export default HomepageHeader;
