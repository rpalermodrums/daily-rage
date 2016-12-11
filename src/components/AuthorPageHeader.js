import React, {Component, PropTypes} from 'react';

class AuthorPageHeader extends Component {
  render () {
    const { title, picture } = this.props

    return (
      <div>
        <h3>{title}</h3>
        <img src={picture} role='presentation' />
      </div>
    )
  }

  static propTypes = {
    title: PropTypes.string,
    picture: PropTypes.string,
  }
}

export default AuthorPageHeader;
