import React, { Component } from 'react';

import { Col } from 'react-bootstrap';

import AboutHeader from './AboutHeader';
import AboutBody from './AboutBody';

const headingText = 'About'

, bodyText = `Cliche everyday carry succulents heirloom, distillery artisan normcore asymmetrical cronut. Banjo paleo poke polaroid franzen, wolf intelligentsia succulents leggings skateboard. Biodiesel hot chicken single-origin coffee umami semiotics. Normcore waistcoat swag crucifix, synth intelligentsia drinking vinegar ennui hashtag godard lumbersexual green juice. Actually listicle typewriter, man braid kogi pork belly letterpress authentic waistcoat distillery. Viral authentic enamel pin vegan. Subway tile knausgaard ramps +1 skateboard single-origin coffee man braid pitchfork, tousled deep v man bun live-edge.
Messenger bag pop-up ennui hoodie freegan. Tumblr VHS banjo mumblecore brunch humblebrag. Wolf forage beard subway tile, mixtape narwhal mustache farm-to-table normcore skateboard godard williamsburg vice lomo. Kombucha health goth raclette bicycle rights truffaut. Pickled drinking vinegar literally, truffaut live-edge franzen tattooed tofu tumeric tacos. Hexagon trust fund ugh copper mug selvage pabst pour-over photo booth. Vape echo park meggings iPhone, blue bottle kitsch authentic cred master cleanse lomo.
Cold-pressed snackwave cliche prism. Hammock marfa woke, organic snackwave knausgaard actually. Forage bicycle rights jianbing, tote bag whatever mumblecore offal. Try-hard cray aesthetic, snackwave dreamcatcher leggings intelligentsia poke biodiesel viral fam franzen celiac vape. Organic raclette knausgaard, portland unicorn umami semiotics kale chips lumbersexual tofu etsy ramps cardigan. Locavore selvage freegan, meditation cred mixtape echo park brunch leggings yuccie. PBR&B bitters tousled +1, godard cronut vegan locavore cornhole la croix gluten-free kitsch kogi organic.
DIY skateboard lo-fi lyft four dollar toast swag. Drinking vinegar cronut green juice shabby chic, banjo literally synth cornhole occupy hashtag gentrify XOXO prism. Viral kale chips woke typewriter kickstarter. Health goth pinterest you probably haven't heard of them, stumptown iceland vegan vaporware vinyl craft beer dreamcatcher artisan godard echo park polaroid humblebrag. Live-edge vinyl chartreuse, tbh williamsburg wolf chicharrones put a bird on it. Tousled poke sriracha, tumeric readymade chillwave listicle XOXO schlitz pickled af PBR&B wolf. VHS celiac tumeric gentrify.`

, picture = 'http://lorempixel.com/output/technics-q-c-640-480-5.jpg';

class AboutPage extends Component {
  render () {
    return (
      <div>
        <Col md={2} />
        <Col md={8} >
          <AboutHeader
            headingText={headingText}
            picture={picture}
            />
          <AboutBody
            aboutBodyText={bodyText}
            />
        </Col>
        <Col md={2} />
      </div>
    );
  }
}

export default AboutPage;
