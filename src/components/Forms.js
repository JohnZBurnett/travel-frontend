import React from 'react'

export default (props) => {

  return (
    <div>
      <form  onSubmit={ (event) => {props.registerSubmit(event)}}>
          <input id="username" value={props.username} type="text" onChange={props.onFormChange} placeholder="Enter username: "></input>
          <input id="password" value={props.password} type="password" onChange={props.onFormChange} placeholder="Enter password: "></input>
          <br/>
        <button id="login-submit" type="submit">Login</button>
      </form>
    </div>
  )
}
