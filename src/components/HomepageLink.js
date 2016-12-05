import React, { Component, PropTypes } from 'react';

class HomepageLink extends Component {
  render () {
    const { link: {src, title}, handleLinkClick } = this.props;

    return (
      <div>
        <tr>
          <td>
            <a
              href={src}
              onClick={handleLinkClick}
              >
              {title}
            </a>
          </td>
        </tr>
        <hr />
      </div>
    )
  }

  static propTypes = {
    link: PropTypes.object,
    handleLinkClick: PropTypes.func,
  }
}

export default HomepageLink;
