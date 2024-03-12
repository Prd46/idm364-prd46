<!-- src/routes/[slug]/+page.svelte -->
<script lang="js">
    /**
     * @typedef {Object} Item
     * @property {string} image - The name of the team.
     * @property {string} name - The name of the team.
     * @property {string} price - The city of the team.
     */
  
    /**
     * @typedef {Object} Data
     * @property {Item} item - The team data.
     */
  
    /** @type {Data} */
    import { cart } from '$lib/cart.js';
    let count = 1;
    export let data;
        
    function addToCart() {
      // If the item category 

      cart.update(items => {
        const addedItem = {
          name: data.item.name,
          price: data.item.price,
          image: data.item.altImageUrl,
          quantity: count,
        };
        return [...items, addedItem];
      });
  }


    console.log(data.item); //DATA IS GETTING HERE, but cannot get the information from it.
  </script>
  		{#if data.item}
      <div>
        <div class="card">
          <div class="image"><img src="{data.item.altImageUrl}" alt="Placeholder Image"></div>
          <div class="caption">
            <h3 class="itemName">{data.item.name}</h3>
            <p>${data.item.price}.00</p>
          </div>
          <p>{data.item.description}</p>
          <button on:click={addToCart}> Add to Cart </button>
        </div>
        
      </div>
      {/if}

      <style>

        .card {
            width: 50%;
            padding: 20px;
            box-sizing: border-box;
            border-radius: 10px;
            margin: 0 10px;
            background-color: #f0f0f0;
        }
        
        .image {
            width: 50%;
        }
        
        .image img {
            max-width: 100%;
            border-radius: 8px;
        }
        
        .caption {
            width: 50%;
        }
        
        </style>