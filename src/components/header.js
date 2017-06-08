import React from 'react';

const Header = (props) => {
  return (
    <h3 className="Header">
      {props.message}
    </h3>
  )
}

export default Header;
