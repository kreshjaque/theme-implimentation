import React from 'react'
import {func, string} from 'prop-types';
import styled from "styled-components"

const Input = styled.input`
  background: ${({theme}) => theme.background};
  border: 2px solid ${({theme}) => theme.toggleBorder};
  color: ${({theme}) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
}
`;
const ThemeSwitch = ({theme, switchTheme}) => {
    const handleClick = (e) => {
        switchTheme(e.target.value);
    }
    return (
        <>
            <Input type="radio" id="light" name="theme" checked={theme === 'light'} value="light"
                   onClick={handleClick}/>
            <label htmlFor="light">Light</label><br/>
            <Input type="radio" id="dark" name="theme" checked={theme === 'dark'} value="dark"
                   onClick={handleClick}/>
            <label htmlFor="dark">Dark</label><br/>
        </>
    );
};
ThemeSwitch.propTypes =
    {
        theme: string.isRequired,
        switchTheme: func.isRequired,
    }
export default ThemeSwitch;
