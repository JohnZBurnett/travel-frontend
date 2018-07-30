import React, { Fragment } from 'react'

const Navbar = (props) => {
  console.log("Navbar Props: ", props);

  function displayUserActionsPanel() {
    if (props.userLoggedIn === false) {
      return(<button className="navbar-button" id="login-button">Login</button>)
    } else {
      return(
        <Fragment>
          <button className="navbar-button" onClick={props.handleUserShowClick}>User Page</button>
          <button className="navbar-button" id="logout-button" onClick={props.handleUserShowClick}>Logout</button>
        </Fragment>
      )
    }
  }

  return (
    <div className="navbar">
      <button onClick={props.onNavbarClick} className="navbar-button" id="articles-button">Articles</button>
      {displayUserActionsPanel()}
    </div>
  )
}

export default Navbar
