import React, { useState } from 'react';
import './LoginSignup.css';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    
    if (!formData.email || !formData.password) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (action === "Sign Up" && !formData.username) {
      alert('Please enter a username');
      return;
    }

    
    console.log('Form submitted:', { action, ...formData });
    
    
    navigate('/Dashboard');
  };

  return (
    <div className="LoginSignup-container">
      <div className="header">
        <div className="text">{action}</div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <input 
              type="text" 
              name="username"
              placeholder="Username" 
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
        )}
       
        <div className="input">
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input">
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
      )}
      
      <div className="Submit-container">
        <div 
          className={action === "Login" ? "submit gray" : "submit"} 
          onClick={() => {
            setAction("Sign Up");
            if (action === "Sign Up") handleSubmit();
          }}
        >
          Sign Up
        </div>
        <div 
          className={action === "Sign Up" ? "submit gray" : "submit"} 
          onClick={() => {
            setAction("Login");
            if (action === "Login") handleSubmit();
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;