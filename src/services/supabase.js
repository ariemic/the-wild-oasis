import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bclkpuqwrfknkpyjnzzq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjbGtwdXF3cmZrbmtweWpuenpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMTgwNzUsImV4cCI6MjA0MTc5NDA3NX0.W9PZpUzAcNWG8MyZqg7zHXufa9VuuvukTTBI0AOwVFg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
