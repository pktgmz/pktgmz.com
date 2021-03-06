import React from 'react';

const Square = (props) => {
  return (
    <button
      type="button"
      autoFocus={props.addFocus}
      className={props.className}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
    >
      {props.value}
    </button>
  );
};

export default Square;
