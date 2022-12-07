import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpg" />
        </div>
        <p>
          Hi, I'm Mike Niko, a self-taught passionate FrontEnd developer from
          USA, currently working at{' '}
          <a className="about__link" href="https://misha76452.com">
            Misha76452
          </a>{' '}
          as a FrontEnd engineer. I've been building on the web since when
          I was in 6th grade, I've made countless side projects.
          <br />
          <br />I also love doing <b>open source</b> development, I actively
          maintain various notable open source projects with over, <br />
          <b>30k+ stars on GitHub</b> and <b>50m+ hits</b>. It gives me a
          wonderful feeling of achievement and joy which I cannot explain in
          words.
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“Simplicity is the baddest choice to be the best.“</p>
        </Quote>
        <Quote>
          <p>
            “I know I’m not successful enough, but I’m passionate enough not to
            worry about success.“
          </p>
        </Quote>
        <Quote>
          <p>
            “Creativity is the driver of an unstoppable train called Passion.”
          </p>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
