import { createClient } from "@supabase/supabase-js";

    const supabaseUrl = "https://ryhprfeajezzvaxupyam.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5aHByZmVhamV6enZheHVweWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MTk1ODksImV4cCI6MjAxNzI5NTU4OX0.J2DJqNY4grCmFW_ol-p-v1UVfsnHsq6aA-Y8-UPtgXg"
    export const supabase = createClient(supabaseUrl, supabaseKey);