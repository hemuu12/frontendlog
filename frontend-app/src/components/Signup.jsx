import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { validate } from '../globalfun';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const errors = validate(email, password);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    const register = {
      email: email,
      password: password
    };
    setLoading(true);
    try {
      const res = await axios.post('https://backendloginsignup.onrender.com/app/signup', register);
      console.log(res.data);
      alert('SignUp Successfully');
      setEmail('');
      setPassword('');
      navigate('/login');
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="form-div">
          <h1>Signup Form</h1>
          <form onSubmit={submit}>
            <input 
              type="text" 
              placeholder="Email" 
              value={email} 
              required 
              onChange={(e) => setEmail(e.target.value)} 
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <br />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              required 
              onChange={(e) => setPassword(e.target.value)} 
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            <br />
            <button className='submit_button' type="submit" disabled={loading}>
              {loading ? 'Loading' : 'Submit'}
              {loading && <div className="loader"></div>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup
