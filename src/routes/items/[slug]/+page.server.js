// src/routes/[slug]/+page.server.js
import { error } from "@sveltejs/kit";
import { PUBLIC_SUPABASE_TABLE } from "$env/static/public";
import { supabase } from '../../supabase_client';

/**
 * Loads products from the 'product_info' table in Supabase.
 * @async
 * @param {object} { params } The parameters from the URL.
 * @returns {Promise<{ items: item[] }>} The product info.
 */

export async function load({params}) {
  const { slug } = params; // Get the slug from the URL
  const { data, error } = await supabase
  .from(PUBLIC_SUPABASE_TABLE)
  .select("*")
  .eq('id', slug)
  .single(); // Select more specific data
  // console.log(data);
  
  if (!data) throw error(404);

  return {
      item: data ?? [],
  };
}