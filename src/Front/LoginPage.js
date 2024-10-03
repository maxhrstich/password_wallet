import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles';
import supabase from '../Back/supabaseClient';

const LoginPage = () => {
  const [email, setEmail] = useState(''); // Supabase uses email instead of username
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError(''); // Clear any previous errors
    try {
      const { error, data } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        setLoginError('Invalid Login'); // Set a general error message
      } else if (data.user) {
        console.log('Login successful for:', data.user.email);
        navigate('/dashboard'); // Navigate to Dashboard on successful login
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Invalid Login'); // Set a general error message for any other errors
    }
  };

  return (
    <div style={styles.loginPageWrapper}>
      <form onSubmit={handleLogin} style={styles.loginForm}>
        <h2 style={{ color: '#fff' }}>Login</h2>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={{ color: '#fff' }}>Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.inputField}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={{ color: '#fff' }}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.inputField}
          />
        </div>
        <button type="submit" style={styles.loginButton}>Log In</button>
        {loginError && <div style={{ color: 'red', marginTop: '10px' }}>{loginError}</div>}
        <p style={{ color: '#fff', marginTop: '10px' }}>
          Don't have an account? <a href="/signup" style={{ color: '#0077b6' }}>Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
