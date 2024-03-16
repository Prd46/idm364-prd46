<script>
    import { cart } from '$lib/cart.js';
    import {goto} from '$app/navigation';
    let totalCost = 0;
    $: {
        totalCost = $cart.reduce((total, item) => total + item.price, 0);
    }
    $: itemNumbers = $cart.length;

    $: addedTax = totalCost * .07;

    $: totalTotal = totalCost + addedTax;

    $: confirmation = false;
    function clearCart() {
      // console.log("clearing cart");
      confirmation = false;
      $cart = [];
    }
    function toggleConfirm(){
      if (confirmation == false){
        confirmation = true;
      }else{
        confirmation = false;
      }
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
      <div class="cartImage"><img src="{item.image}" alt="Placeholder Image"></div>
      <div><h4>{item.name}</h4></div>
      <div><h4>${item.price}.00</h4></div>
      <button on:click={() => cart.update(items => items.filter(i => i !== item))}><div class="xButton"><h3 class="x">X</h3></div></button>
    </div>
      
    {/each}
    <p>Item cost: ${totalCost.toFixed(2)}</p>
    <p>Tax: ${addedTax.toFixed(2)}</p>
    <p>Total: ${totalTotal.toFixed(2)}</p>
    <button on:click={toggleConfirm}><h3>Complete Purchase</h3></button>
    {:else}
      <p>No items in your cart!</p>
    {/if}
    {#if confirmation == true}
      <div>
        <p>Are you sure you'd like to confirm your purchase?</p>
        <div>
          <button on:click={toggleConfirm}><h3 class="no">No</h3></button>
          <button on:click={clearCart}><h3>Yes</h3></button>
        </div>
      </div>
    {/if}
  </ul>
  <style>
    h3, p{
      color: white;
    }
    h4{
      color: black;
    }
    .no{
      padding-right: 1rem;
    }
    .itemListing{
      background-color: white;
      border-radius: var(--brsmall);
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 8rem;
    }
    .itemListing div{
      margin: 0 1rem;
    }
    .cartImage{
      height: 100%;
      overflow: hidden;
    }
    .xButton{
      height: 42px;
      width: 42px;
      background-color: black;
      border-radius: 18px;
      padding: 2px;
      margin: 0;
      border: solid 2px white;
    }
    .x{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 38px;
      width: 38px;
      padding: 0;
      margin: 0;
      background-color: black;
      border-radius: 16px;
      border: solid 2px rgb(255, 255, 255);
    }

    .addButton{

        }
        .addBorder{

        }

    
  </style>