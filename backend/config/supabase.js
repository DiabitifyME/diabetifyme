const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://vpnaabxpziztzrkggrse.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwbmFhYnhweml6dHpya2dncnNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5MDY0NjksImV4cCI6MjA1NzQ4MjQ2OX0.c3JNitIVpb4iNMxzoiQZPbQZL2gZSmthfE5OkRK7WEM';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;