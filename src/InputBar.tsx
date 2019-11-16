import React from 'react';
import { InputBarStyled, InputText } from './styles';
const Fade = require('react-reveal/Fade');


interface IInputBarProps {
    text: string;
    placeholder: string;
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    showText: boolean;
  }

  
  const InputBar: React.FC<IInputBarProps> = (props) => {

    
    return (
      <InputBarStyled>
      <Fade top opposite cascade collapse when={props.showText}>
        <InputText
          type='text'
          placeholder={props.placeholder}
          value={props.text}
          onChange={props.onChange}
          onKeyPress={props.onKeyPress}
        />
        </Fade>
      

      </InputBarStyled>
    );
  };
  
  export default InputBar;