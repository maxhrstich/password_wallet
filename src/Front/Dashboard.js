import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../Back/supabaseClient';
import styles from './styles';

const Dashboard = () => {
  const navigate = useNavigate();
  const [logins, setLogins] = useState([]);
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Define fetchLogins using useCallback to ensure it doesn't get recreated unless necessary
  const fetchLogins = useCallback(async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) {
      console.error('Error or no user:', error?.message);
      navigate('/login');
      return;
    }

    const { data, error: fetchError } = await supabase
      .from('login_details')
      .select('*')
      .eq('user_id', user.id);

    if (fetchError) {
      console.error('Error fetching logins:', fetchError.message);
    } else {
      setLogins(data);
    }
  }, [navigate]);

  useEffect(() => {
    fetchLogins();
  }, [fetchLogins]);

  const handleAddLogin = async (e) => {
    e.preventDefault();
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) {
      console.error('Error or no user:', error?.message);
      return;
    }

    const { error: insertError } = await supabase
      .from('login_details')
      .insert([{ user_id: user.id, website, username, password }]);

    if (insertError) {
      console.error('Error adding new login:', insertError.message);
    } else {
      // After adding, fetch logins again to update the UI
      fetchLogins();
      setWebsite('');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <h2>Add New Login Detail</h2>
      <form onSubmit={handleAddLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Add Login</button>
      </form>
      <div>
        {logins.map((login, index) => (
          <div key={index}>
            <p style={{ color: 'white' }}>Website: {login.website}</p>
            <p style={{ color: 'white' }}>Username: {login.username}</p>
            {/* Reminder to handle password display securely */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
