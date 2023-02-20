import React from 'react';
import logInImage from '../../assets/images/login/login.svg'

const LogIn = () => {
    const handleSubmit = e => {
        e.preventDefault();
        
        
    }
    return (
        <div>
            <div className="hero">
  <div className="hero-content my-10  flex-col lg:flex-row">
    <div className="text-center w-1/2 lg:text-left">
      <img src= {logInImage}/>
    </div>

    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={ handleSubmit } className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary bg-orange-500" type="submit" value="LogIn" />
          
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;