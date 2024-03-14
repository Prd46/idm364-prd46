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
    import {goto} from '$app/navigation'
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
      <div class="cardContainer">
        <div class="card">
          <button on:click={() => goto('/')}><p class="footer_pageLink">← Back</p></button>
          <div class="image"><img src="{data.item.altImageUrl}" alt="Placeholder Image"></div>
          <div class="caption">
            <h3 class="itemName">{data.item.name}</h3>
            <p>${data.item.price}.00</p>
          </div>
          <p>{data.item.description}</p>
          <div class="cardButtons">
            <div class="addBorder">
              <button class="addButton" on:click={addToCart}><h4>Add to Cart</h4></button>
            </div>
          </div>
        </div>
        
      </div>
      {/if}

      <style>

        .card {
            width: 80%;
            padding: 20px;
            box-sizing: border-box;
            border-radius: 10px;
            margin: 0 10px;
            background-color: #f0f0f0;

        }
        .cardContainer{
          width: 100%;
          display: flex;
          justify-content: center;
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
        .addButton{
          padding: .5rem 1rem;
          background-color: black;
          border-radius: 16px;
          border: solid 2px white;
        }
        .addBorder{
          background-color: black;
          border-radius: 18px;
          padding: 3px;
        }
        .cardButtons{
          display: flex;
          justify-content: flex-end;
        }
        
        </style>