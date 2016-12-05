import React, {Component, PropTypes} from 'react';
// import { observable } from 'mobx';
// import { observer } from 'mobx-react';

import HomepageLink from './HomepageLink';

class HomepageLinkTable extends Component {
  render () {
    const { links, handleLinkClick } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link) => {
            return (
              <HomepageLink
                key={link.id}
                link={link}
                handleLinkClick={handleLinkClick}
                />
            )
          })}
        </tbody>
      </table>
    );
  }

  static propTypes = {
    links: PropTypes.array,
    handleLinkClick: PropTypes.func,
  }
}

export default HomepageLinkTable;
