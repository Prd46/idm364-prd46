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

    $: checkedOut = false;

    $: number = 0;

    function clearCart() {
      // console.log("clearing cart");
      confirmation = false;
      checkedOut = true;
      $cart = [];
      number = Math.floor(Math.random() * 10000000000);
      return number
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
      <div class="textDiv">
        <div><h4>{item.name}</h4></div>
        <div><h4>${item.price}.00</h4></div>
      </div>
      <button on:click={() => cart.update(items => items.filter(i => i !== item))}><div class="xButton"><h3 class="x">X</h3></div></button>
    </div>
      
    {/each}
    <div class="prices">
      <div>
        <p>Item cost: ${totalCost.toFixed(2)}</p>
        <p>Tax: ${addedTax.toFixed(2)}</p>
        <p>Total: ${totalTotal.toFixed(2)}</p>
        <button on:click={toggleConfirm}><h3>Complete Purchase</h3></button>
      </div>
      {#if confirmation == true}
      <div class="confirmation">
        <p>Are you sure you'd like to confirm your purchase?</p>
        <div>
          <button on:click={toggleConfirm}><h3 class="no">No</h3></button>
          <button on:click={clearCart}><h3>Yes</h3></button>
        </div>
      </div>
    {/if}
    </div>
    {:else}
      <p>No items in your cart!</p>
      {#if checkedOut == true}
      <h3>Order complete! Your confirmation number is {number}</h3>
      {/if}
    {/if}
    
  </ul>
  <style>
    h3, p{
      color: white;
    }
    .itemListing{
      background-color: white;
      border-radius: var(--brsmall);
      margin-bottom: 1rem;
      display: flex;

      justify-content: space-between;
      align-items: center;
      height: 8rem;
      padding: 0 5%;
    }
    .prices{
      border: solid 2px var(--dimFill);
      padding: 1rem;
      border-radius: var(--brsmall);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .confirmation{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h4{
      color: black;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .textDiv{
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .no{
      padding-right: 1rem;
    }

    .itemListing div{
      margin-right: 0 1rem;
      margin-left: .5rem;
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
    
  </style>