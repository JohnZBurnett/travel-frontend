import React from 'react'

export default (props) => {

  return (
    <div>
      <h2>Login Here:</h2>
      <form onSubmit={ (event) => {props.registerSubmit(event)}}>
          <input id="username" value={props.username} type="text" onChange={props.onFormChange} placeholder="Enter username: "></input>
          <input id="password" value={props.password} type="text" onChange={props.onFormChange} placeholder="Enter password: "></input>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
