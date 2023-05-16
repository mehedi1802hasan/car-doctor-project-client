import React from 'react';
import img from '../../../car-doctor-resources/assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {
  const {signIn}=useContext(AuthContext)
  const handleLogin=event=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)
    signIn(email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser)
    })
    .catch(error=>{
      console.log(error)
    })
  
  }
    return (
        <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row">
          <div className="w-1/2 text-center lg:text-left">
       <img src={img} alt="" />
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h3 className='text-3xl'>Login</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="mt-6 form-control">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>  Are you new ? <Link to="/registration">SingUp</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;