import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { registerWithEmailPassword, setUser, setIsLoading, updateName } = useAuth();

  const history = useHistory()
  const location = useLocation()
  const url = location.state?.from || "/home"

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleName = e => {
    setName(e.target.value)
  }
  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleRegistration = e => {
    e.preventDefault();
    registerWithEmailPassword(email, password)
      .then((res) => {
        setIsLoading(true)
        updateName(name)
        setUser(res.user)
        history.push(url)
      })
      .catch((error) => {

      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className="my-5 p-5">
      <h1 className="text-center">Registration</h1>
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleRegistration} className="container w-50">
          <div className="row my-2">
            <div className="input-group">
              <div className="input-group-text fw-bold"><i className="fas fa-user"></i></div>
              <input type="text" className="form-control" id="autoSizingInputGroup" onBlur={handleName} placeholder="Enter Your Name" />
            </div>
          </div>
          <div className="row my-2">
            <div className="input-group">
              <div className="input-group-text fw-bold"><i className="fas fa-envelope"></i></div>
              <input type="text" className="form-control" id="autoSizingInputGroup" onBlur={handleEmail} placeholder="Enter Your Email" />
            </div>
          </div>
          <div className="row my-2">
            <div className="input-group">
              <div className="input-group-text fw-bold"><i className="fas fa-key"></i></div>
              <input type="password" className="form-control" id="autoSizingInputGroup" onBlur={handlePassword} placeholder="Enter Your Password" />
              {/* <p>{error}</p> */}
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark fw-bold">Sign Up</button>
            <hr />
            <p className="fw-bold">Already Register? Please <Link to="/login">Sign In</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;