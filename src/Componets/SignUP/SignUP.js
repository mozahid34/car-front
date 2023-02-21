import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logInImage from '../../assets/images/login/login.svg';
import {AuthContext} from '../../AuthContext/AuthProvider'

const SignUP = () => {
  const {createUser} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

       
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }
    return (
        <div className="hero">
  <div className="hero-content my-10  flex-col lg:flex-row">
    <div className="text-center w-1/2 lg:text-left">
      <img src= {logInImage}/>
    </div>

    <div className="card py-5 flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={ handleSignUp } className="card-body">
      <h1 className="text-5xl font-bold">Sign UP</h1>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Write your Name" className="input input-bordered" />
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
        <div className="form-control mt-6">
            <input className="btn btn-success text-white bg-orange-500" type="submit" value="SignUP" />
          
        </div>
      </form>
      <p className="text-center">Already have Account? <Link className='text-orange-500 font-bold' to="/logIn">LogIn</Link></p>
    </div>
  </div>
</div>
    );
};

export default SignUP;