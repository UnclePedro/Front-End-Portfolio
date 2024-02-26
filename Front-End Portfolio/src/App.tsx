//import { useState } from 'react';
//import styles from './App.module.css';
import headshot from '../src/assets/temp-headshot.jpeg';
import tempProjectImg from '../src/assets/project-placeholder.png';
import ProjectBlock from './components/ProjectBlock';
import AboutMeBlock from './components/AboutMeBlock';
import LandingPageBanner from './components/LandingPageBanner';
import GetInTouch from './components/GetInTouch';
import ArrowElement from './components/ArrowElement';
import Footer from './components/Footer';

// need to fix font weight issues

function App() {
  return (
    <>
      <LandingPageBanner heading1={"Hi, I'm Peter"} heading2={'Welcome to my front-end portfolio'} />
      <div className={'-mt-[120px]'}>
        <ArrowElement />
      </div>

      <AboutMeBlock
        title={'About Me'}
        description1={
          'I’m branching out - I’m learning to code. The past decade of my life has revolved around digital marketing, video production and photography. Now, I’m eager to grow my skillset and help build great tech solutions as a programmer.'
        }
        description2={
          'This change comes as an exploration, a challenge to myself, to never be caught standing still! Front-end developer loading…'
        }
        img={headshot}
      />

      <div>
        <ArrowElement />
      </div>

      <div className={'mt-56'}>
        <ProjectBlock
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
          }
          title={'Play-This'}
          img={tempProjectImg}
          isImgOnLeft={false}
          displayLine={true}
        />

        {/* could make the project block line separators animate side to side nicely */}

        <ProjectBlock
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
          }
          title={'Message Masher'}
          img={tempProjectImg}
          isImgOnLeft={true}
          displayLine={true}
        />
        <ProjectBlock
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
          }
          title={'Find Your Hat'}
          img={tempProjectImg}
          isImgOnLeft={false}
          displayLine={false}
        />
      </div>
      {/* 
      <div className="h-8">
        <ArrowElement />
      </div> */}

      <div className="mb-[300px] mt-[150px]">
        <GetInTouch
          title={'Get in touch'}
          bodyText={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
          }
          buttonText={'Say Hello!'}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
