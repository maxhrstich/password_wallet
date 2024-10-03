import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../Back/supabaseClient';
import styles from './styles'; // Ensure this path is correct

const SignUpPage = () => {
  const [email, setEmail] = useState(''); // Supabase uses email instead of username
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Error signing up:', error.message);
    } else {
      console.log('User signed up:', user);
      // Redirect the user to the dashboard or login page
      navigate('/dashboard'); // Or where you handle post-signup/login
    }
  };

  return (
    <div style={styles.loginPageWrapper}>
      <form style={styles.signUpForm} onSubmit={handleSignUp}>
        <h2 style={{ color: '#fff' }}>Sign Up</h2>
        <div style={styles.formGroup}>
          <input
            type="email" // Change type to email for Supabase Auth
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.inputField}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.inputField}
            required
          />
        </div>
        <button type="submit" style={styles.loginButton}>Submit</button>
      </form>
    </div>
  );
};

export default SignUpPage;
