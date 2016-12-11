import React, { Component, PropTypes } from 'react';

class AboutBody extends Component {
  render () {
    const { aboutBodyText, subtitle } = this.props
    , aboutBodyParagraphs = aboutBodyText.split(/\n/);

    return (
      <div>
        <h3>{subtitle}</h3>
        {aboutBodyParagraphs.map((paragraph) => {
          return (<p key={paragraph}>{paragraph}</p>)
        })}
      </div>
    )
  }

  static propTypes = {
    aboutBodyText: PropTypes.string,
  }
}

export default AboutBody;
