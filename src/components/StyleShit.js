import React from 'react';
import './MyStyle.css';
function StyleShit(props) {
  let className = props.primary ? 'primary' : '';

  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheeet</h1>
    </div>
  );
}

export default StyleShit;
