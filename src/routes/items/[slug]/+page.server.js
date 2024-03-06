// src/routes/[slug]/+page.server.js
import { error } from "@sveltejs/kit";
import { slugify } from "$lib/utils.js";
import { PUBLIC_SUPABASE_TABLE } from "$env/static/public";
import { supabase } from "$lib/server/supabase_client";

/**
 * Loads products from the 'product_info' table in Supabase.
 * @async
 * @returns {Promise<{ items: item[] }>} The product info.
 */

export async function load() {
  const { data, error } = await supabase
  .from(PUBLIC_SUPABASE_TABLE)
  .select("*")
  .eq('id', )
  .single(); // Select more specific data

  console.log(data);

  return {
    items: data ?? []
  };
}


// export function load({ params }) {
//   const item = items.find((ite ) => slugify(item.image) === params.slug);

//   if (!item) throw error(404);

//   return {
//     item
//   };
// }
