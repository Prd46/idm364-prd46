<script>
    import { cart } from '$lib/cart.js';
    import {goto} from '$app/navigation';
    let totalCost = 0;

    $: itemNumbers = $cart.length;

    function clearCart() {
      // console.log("clearing cart");
      $cart = [];
    }
</script>

<svelte:head>
	<title>Cart | {itemNumbers}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
Cart
<ul>
    {#if $cart.length > 0}
    {#each $cart as item}
      <div>{item.price} <button on:click={() => cart.update(items => items.filter(i => i !== item))}>X</button></div>
      
    {/each}
    {:else}
      <p>No items in your cart!</p>
    {/if}
    <button on:click={clearCart}><h3>Complete Purchase</h3></button>
  </ul>