import React from 'react'

export default (props) => {

  return (
    <div>
      <h2>Register Here:</h2>
      <form onSubmit={ (event) => props.registerSubmit(event, {username: this.state.username, password: this.state.password})}>
          <input type="text" placeholder="Enter username: "></input>
          <input type="text" placeholder="Enter password: "></input>
      </form>

      <h2>Log In Here</h2>
      <form onSubmit={props.loginSubmit}>
        <input type="text" placeholder="Enter username: "></input>
        <input type="text" placeholder="Enter password: "></input>
      </form>

    </div>
  )
}
