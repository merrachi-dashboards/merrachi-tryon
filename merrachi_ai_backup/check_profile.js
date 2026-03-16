const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkUser() {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('email', 'viresh@flexy.nl')
  
  if (error) {
    console.error('Error fetching profile:', error)
    return
  }
  
  console.log('Profile for viresh@flexy.nl:', data)
}

checkUser()
