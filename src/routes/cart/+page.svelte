<script>
    import { cart } from '$lib/cart.js';
    import {goto} from '$app/navigation';
    let totalCost = 0;
</script>
Cart
<ul>
    {#if $cart.length > 0}
    {#each $cart as item}
      <li>{item.price}</li>
    {/each}
    {/if}
    <button on:click={() => goto('/checkout')}><h3>Go to Checkout</h3></button>
  </ul>