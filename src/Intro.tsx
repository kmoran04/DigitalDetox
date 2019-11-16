import React, { useState } from 'react';
import { IntroStyled } from './styles';
import Typed from 'react-typed';


interface IIntroProps {
    onComplete: (self?: Typed) => void
}


  
  const Intro: React.FC<IIntroProps> = (props) => {

    const welcomeStrings = [
        'welcome to <strong>digital detox</strong>',
        'take a deep breath',
        'forget about the likes^1000, the comments',
        '...your relatives\' facebook rants',
        'we know how important it is to stay connected',
        '...plugged in',
        '...on top of everything',
        'but sometimes we all need to <strong>disconnect</strong>',
        'so this is a place to do just that',
        'let it all out^1000',
        'send your thoughts out to the universe',
        'and watch them disappear',
        'try it out...',
    ]

    
    return (
      <IntroStyled>
      <Typed
        strings={welcomeStrings}
            typeSpeed={100}
            fadeOut={true}
            fadeOutDelay={1000}
            onComplete={props.onComplete}
        />
      </IntroStyled>
    );
  };
  
  export default Intro;