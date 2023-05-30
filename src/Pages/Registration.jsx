import React from 'react';
import img from '../../../car-doctor-resources/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from '../Home/Shared/SocialLogin';
const Registration = () => {
    const {createUser}=useContext(AuthContext);
    const handleSingUp=event=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password)
        createUser(email,password)
        .then(result=>{
            const singgedUser=result.user;
            console.log(singgedUser);
        })
        .then(error=>{
            console.log(error.message)
        })
      }
    return (
        <div>
                <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row">
          <div className="w-1/2 text-center lg:text-left">
       <img src={img} alt="" />
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            <form onSubmit={handleSingUp} className="card-body">
              <h3 className='text-3xl'>SingUp</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input type="text" name='name' placeholder="enter your name" className="input input-bordered" />
                
              </div>
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
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm-Password</span>
                </label>
                <input type="password" name='confirmPassword' placeholder="password" className="input input-bordered" />
                
              </div>
              <div className="mt-6 form-control">
                <button className="btn btn-primary">Registraiton</button>
              </div>
              <SocialLogin/>
            </form>
          <p>  Have you account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Registration;