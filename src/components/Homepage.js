import React, {Component} from 'react';
// import { observable } from 'mobx';
// import { observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { browserHistory } from 'react-router';
import { Col } from 'react-bootstrap';

import HomepageHeader from './HomepageHeader';
import HomepageLinkTable from './HomepageLinkTable';

const LINKS = [
  {src: '#', title: 'hello', id: 1},
  {src: '#', title: 'what', id: 2},
  {src: '#', title: 'ok', id: 3},
]

, IMAGE_STYLE = {
  height: '50%',
  width: '50%',
  margin: '0 auto',
  display: 'block',
}

@autobind
class Homepage extends Component {
  handleLinkClick (e) {
    browserHistory.push('/articles');
  }

  render () {
    return (
      <div className='homepage'>
        <Col md={2} />
        <Col md={8}>
          <HomepageHeader imageStyle={IMAGE_STYLE} />
          <HomepageLinkTable handleLinkClick={this.handleLinkClick} links={LINKS} />
        </Col>
        <Col md={2} />
      </div>
    );
  }
}

export default Homepage;
