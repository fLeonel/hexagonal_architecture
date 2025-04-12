import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://oksnquqkztvkremzbkom.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rc25xdXFrenR2a3JlbXpia29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NzcwNzIsImV4cCI6MjA2MDA1MzA3Mn0.Dwj8lQ62hWV40zBYmtMreLznhQ6UiVz48EdEL0xGnN8"
);
