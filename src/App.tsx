import React, { useState } from 'react';
import './App.css';

import InputBar from './InputBar';
import Intro from './Intro';
import { Logo } from './styles';
import logo from './logo.png';
var music = require("./bensound-slowmotion.mp3");
//import Sound from 'react-sound';
var Sound = require('react-sound').default;





const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [showText, setShowText] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [showMoreStars3, setShowMoreStars3] = useState(false);
  const [showMoreStars6, setShowMoreStars6] = useState(false);


  const [count, setCount] = useState(0);


  const onKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if(inputText != '') {
        if(count == 3) {
          setShowMoreStars3(true);
          setCount(count+1);
        }
        else if(count == 6) {
          setShowMoreStars6(true);
          setCount(count+1);
        }
        else if(count < 6){
          setCount(count+1)
        }
 
          
        setTimeout(() =>
          {setInputText('')}, 
          500);
        
        setShowText(false);
        setTimeout(() =>
          {setShowText(true)}, 
          900);
      }
    }

  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setInputText(e.target.value);
  }

  const onComplete = () => {
    setTimeout(() => {
      setShowInput(true);
      setShowText(false);
      setShowText(true);
    }, 1000);
  }


  return (
    <div className="App">
      <Sound url={music}  playStatus={Sound.status.PLAYING} loop={true} autoLoad={true}/>

      <Logo href='https://www.kristenemoran.com' target='_blank'><img src={logo} alt="logo" height="80px" /> </Logo>
      {showMoreStars6 ? <div id="stars"> </div> : null}
      {showMoreStars3 ? <div id="starsMore"> </div> : null}
      <div id="stars2" > </div>

      <header className="App-header">
        {showInput ? <InputBar text={inputText} placeholder="type your thoughts here" onKeyPress={onKeyPress} onChange={onChange} showText={showText}/>  : <Intro onComplete={onComplete} /> }       
      </header>
    </div>
  );
}

export default App;
