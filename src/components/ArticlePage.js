import React, { Component } from 'react';
// import { observable } from 'mobx';
// import { observer } from 'mobx-react';
import { Col } from 'react-bootstrap';

import ArticlePageHeader from './ArticlePageHeader';
import ArticleBody from './ArticleBody';

const IMAGE_STYLE = {
  height: '50%',
  width: '50%',
  margin: '0 auto',
  display: 'block',
}

class ArticlePage extends Component {
  render () {
    // const { article } = this.props;
    const article = {
      picture: 'http://gallery.photo.net/photo/17435142-md.jpg',
      title: 'WOWOWOW',
      bodyText: `Bacon ipsum dolor amet ham hock jerky rump swine prosciutto hamburger venison cupim drumstick ball tip cow tail meatball. Short loin spare ribs venison short ribs, shankle pig chuck swine. Short loin pork meatloaf ribeye frankfurter, t-bone landjaeger drumstick. Short ribs turkey picanha corned beef andouille tri-tip sausage shankle shank tail tenderloin. Strip steak tenderloin pork belly short ribs ham jowl cupim turkey short loin beef ribs kielbasa pork loin leberkas brisket tongue.
                Shankle venison meatloaf short ribs shank cupim picanha, pig jerky leberkas pastrami sirloin doner bacon. Ribeye fatback beef ribs, ham hock filet mignon corned beef jerky porchetta andouille rump prosciutto pork loin ball tip pancetta. Hamburger t-bone sirloin sausage cupim. Hamburger salami rump doner. Pork loin pork leberkas beef ribs ham hock sausage frankfurter meatball pig.
                Meatloaf pork chop venison landjaeger rump. Spare ribs tail alcatra turducken corned beef chuck bresaola boudin shank strip steak porchetta pork belly pork chop cupim meatball. Boudin short loin bresaola, salami pork loin pastrami venison ground round. Cupim chicken tail ball tip swine.
                Doner fatback ham hock, ball tip pork chop salami turducken tenderloin shoulder. Pork alcatra shoulder tenderloin shank. Capicola landjaeger spare ribs andouille pork belly pork burgdoggen. Spare ribs pork chop kevin ham hock alcatra.
                Beef ribs tongue tri-tip shoulder kevin ham hock. Shoulder chuck bacon sirloin. Fatback venison shankle, meatball boudin biltong tail beef ribs jerky cupim jowl. Swine ham hock bacon short ribs filet mignon pork loin turkey. Pastrami andouille tongue ribeye turducken tail t-bone ground round jowl beef hamburger meatball. Pork loin andouille alcatra, beef ribs spare ribs shoulder bresaola fatback.`
    }

    return (
      <div>
      <div>
        <Col md={2} />
        <Col md={8}>
          <ArticlePageHeader imageStyle={IMAGE_STYLE} article={article} />
          <ArticleBody article={article} />
        </Col>
        <Col md={2} />
        </div>
      </div>
    )
  }
}

export default ArticlePage;
