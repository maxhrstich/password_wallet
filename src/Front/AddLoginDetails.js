import React, { useState } from 'react';
import supabase from './supabaseClient'; // Adjust this path as necessary

const AddLoginDetails = () => {
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleAddLogin = async (event) => {
    event.preventDefault();

    const { data: { user }, error } = await supabase.auth.getUser();
    if (!user || error) {
      setMessage('You must be logged in to add login details.');
      return;
    }

    const { error: insertError } = await supabase.from('login_details').insert([
      {
        user_id: user.id, // Ensure user.id is not null
        website: website,
        username: username,
        password: password
      }
    ]);

    if (insertError) {
      setMessage('Error: ' + insertError.message);
    } else {
      setMessage('Login details added successfully!');
      setWebsite('');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div>
      <h2>Add Login Details</h2>
      <form onSubmit={handleAddLogin}>
        <input type="text" placeholder="Website" value={website} onChange={e => setWebsite(e.target.value)} />
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Add Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddLoginDetails;
