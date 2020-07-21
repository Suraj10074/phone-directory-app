import React from 'react';
import './Header.css';
const Header = (props) => {
  // Example (Inline Styling) 
  // Approach 1 - Directly writing style alongside JSX:

  /* return(
      <div style={{textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase'}}>
        Phone Directory
      </div>
    )
  */

  // Approach 2 - Moving style as constant object:
  
  /*const headerStyle = {
    textAlign: 'center',
    padding: 20,
    background: '#000',
    color: '#fff',
    textTransform: 'uppercase'
  }

  return (
    <div style={headerStyle}>
      Phone Directory
    </div>
  )
  */

//External Style Sheet
  return (
    <div className="header">
      {props.heading}
    </div>
  )}
export default Header;