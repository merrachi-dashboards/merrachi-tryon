const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://fggoizyqbyiozhfrpdxm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZ29penlxYnlpb3poZnJwZHhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMTcyMDAsImV4cCI6MjA4NTc5MzIwMH0.5xEDA67BepABjLxlu5NZvZvQTTuuz9XXbSAXw5B8mI0';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkUser() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'viresh@flexy.nl',
    password: 'Ramkes123',
  });

  if (error) {
    console.log('Login failed:', error.message);
  } else {
    console.log('Login successful for:', data.user.email);
  }
}

checkUser();
