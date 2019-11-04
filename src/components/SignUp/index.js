import React from 'react';
import PropTypes from 'prop-types';

const SignUp = ({ onChange, onSubmit, error }) => {
  return (
    <div>
      <form onSubmit={onSubmit} autoComplete="off">
        <h1>Sign Up</h1>
        <p>{error}</p>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={onChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={onChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default SignUp;
