import React, { useContext } from 'react';
import { ThemeContext } from 'context/theme.context';
import "./toggleBtn.css";


function ToggleBtn() {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button 
        className={!theme ? "btn_toggle goDark" : "btn_toggle goLight"}
        type="button" 
        onClick={ToggleTheme}
      > 
        {!theme ? "🌙 Dark" : "☀️ Light"} 
      </button>
    </div>
  )
}

export default ToggleBtn;
