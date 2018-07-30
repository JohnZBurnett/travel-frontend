import React from 'react'

export default (props) => {

  return (
    <div>
      <h2>Register Here:</h2>
      <form onSubmit={ (event) => props.registerSubmit(event, {username: this.state.username, password: this.state.password})}>
          <input id="username" value={props.username} type="text" onChange={props.onFormChange} placeholder="Enter username: "></input>
          <input id="password" value={props.password} type="text" onChange={props.onFormChange} placeholder="Enter password: "></input>
        <button type="submit">Register</button>
      </form>

      <h2>Log In Here</h2>
      <form onSubmit={props.loginSubmit} onChange={props.onFormChange}>
          <input id="username" value={props.username} type="text" onChange={props.onFormChange} placeholder="Enter username: "></input>
          <input id="password" value={props.password} type="text" onChange={props.onFormChange} placeholder="Enter password: "></input>
          <button type="submit">Log In</button>

      </form>

    </div>
  )
}
