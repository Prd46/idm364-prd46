import { supabase } from '$lib/server/supabase_client';
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('items')
      .select("*"); //THIS IS THE EQUIVALENT OF SELECT * FROM DATABASE
    // console.log(data); // LOG THE DATA TO CHECK IF IT'S COMING IN
    return new Response(JSON.stringify({ items: data }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching items: ", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}