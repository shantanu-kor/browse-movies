import React, { useState } from 'react'
import SignUp from '../components/SignUp';
import LogIn from '../components/LogIn';

const Auth = () => {
  const [newUser, setNewUser] = useState(true);
  const setNewUserFalse = () => {
    setNewUser(false);
  }
  const setNewUserTrue = () => {
    setNewUser(true);
  }

  return (
    <React.Fragment>
      <br />
      <br />
      {newUser ? <SignUp toLogin={setNewUserFalse} /> : <LogIn />}
      <div className="text-center my-5 md:text-1xl">
        {newUser
          ?
          <button className="p-2 rounded-md text-white bg-blue-700" onClick={setNewUserFalse}>Already a user? Login</button>
          :
          <button className="p-2 rounded-md text-white bg-blue-700" onClick={setNewUserTrue}>New user? Signup</button>}
      </div>
    </React.Fragment>
  )
}

export default Auth;