// src/Back/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hupoakhqkwrenwfumazi.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY; // Ensure this environment variable is set in your .env file

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey); 

export default supabase; // Export the initialized client
