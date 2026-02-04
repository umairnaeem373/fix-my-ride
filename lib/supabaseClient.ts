import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://nmygylqurzimjioxommn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5teWd5bHF1cnppbWppb3hvbW1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExMDg1MzMsImV4cCI6MjA3NjY4NDUzM30.E3y6uQ-1wd-afhe8rt_x5c3ahwWzuTpjYl-GcNkx5fA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
