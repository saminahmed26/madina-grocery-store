create table if not exists public.store_documents (
  key text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.store_documents enable row level security;

drop policy if exists "Public can read store documents" on public.store_documents;
create policy "Public can read store documents"
on public.store_documents
for select
to anon
using (true);

-- Writes are handled by the Next.js API using the service-role key.
-- Do not expose the service-role key in browser code.
