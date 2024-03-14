<script>
    import { cart } from '$lib/cart.js';
    import {goto} from '$app/navigation';
    let totalCost = 0;
    $: {
        totalCost = $cart.reduce((total, item) => total + item.price, 0);
    }
    $: itemNumbers = $cart.length;

    $: addedTax = totalCost * .07;

    function clearCart() {
      // console.log("clearing cart");
      $cart = [];
    }
</script>

<svelte:head>
	<title>Cart | {itemNumbers}</title>
	<meta name="description" content="String king item page" />
</svelte:head>
<h3>Your items:</h3>
<ul>
    {#if $cart.length > 0}
    {#each $cart as item}
    <div class="itemListing">
      <div><img src="{item.image}" alt="Placeholder Image"></div>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <button on:click={() => cart.update(items => items.filter(i => i !== item))}>X</button>
    </div>
      
    {/each}
    {:else}
      <p>No items in your cart!</p>
    {/if}
    <p>Item cost: ${totalCost.toFixed(2)}</p>
    <p>Tax: ${addedTax.toFixed(2)}</p>
    <p>Total: ${totalCost + addedTax}</p>
    <button on:click={clearCart}><h3>Complete Purchase</h3></button>
  </ul>
  <style>
    h3{
      color: white;
    }
    .itemListing{
      background-color: white;
      border-radius: var(--brsmall);
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-evenly;
      height: 5rem;
    }
  </style>