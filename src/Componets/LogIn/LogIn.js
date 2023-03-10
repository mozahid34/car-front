import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logInImage from '../../assets/images/login/login.svg'
import { AuthContext } from '../../AuthContext/AuthProvider';

const LogIn = () => {
  const {login} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .then(error => console.log(error));
        
        
    }
    return (
        <div>
            <div className="hero">
  <div className="hero-content my-10  flex-col lg:flex-row">
    <div className="text-center w-1/2 lg:text-left">
      <img src= {logInImage}/>
    </div>

    <div className="card py-5 flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={ handleSubmit } className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary bg-orange-500" type="submit" value="LogIn" />
          
        </div>
      </form>
      <p className="text-center">New to here? <Link className='text-orange-500 font-bold' to="/signUp">SignUP</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;