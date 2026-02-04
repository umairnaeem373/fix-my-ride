-- Create the table for storing deletion requests
-- Using quotes to preserve case sensitivity if that is what you prefer (Prisma style), 
-- or you can use lower case. Since you requested "DeleteAccountRequest", we use quotes here.
create table if not exists public."DeleteAccountRequest" (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) not null,
  email text not null,
  status text default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public."DeleteAccountRequest" enable row level security;

-- Policy: Users can insert their own requests
create policy "Users can insert their own deletion requests"
on public."DeleteAccountRequest"
for insert
to authenticated
with check (auth.uid() = user_id);

-- Policy: Users can view their own requests
create policy "Users can view their own deletion requests"
on public."DeleteAccountRequest"
for select
to authenticated
using (auth.uid() = user_id);

-- Policy: Service Role (Admin) access
-- (Implicitly granted to service_role)
