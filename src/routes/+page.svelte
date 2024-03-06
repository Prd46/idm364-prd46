<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Carousel from './Carousel.svelte';
	import Card from './Card.svelte';
	import Filter from './Filter.svelte';
	// import { formatPrice } from '$lib/utils';
	// const pageTitle = document.title;
	export let data;


let categories = ["7-String", "8-String", "Amp", "Pre-Amp", "Cable", "Strings"];
$:{
	console.log(data)
}

// const paintAreas = document.querySelectorAll(".paintSplash");
// paintAreas.forEach((paintArea) =>{
// 	for (let i = 0; i < 10; i++) {
// 		let div = createElement("div");
// }
// });

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<section>
	<div class="images">
		<!-- <img class="paintImg" src='/images/paint.png' alt="Paintsplatter" /> -->
	</div>
	<div class="text">
		<div class="paintSplash">
			<h1 class="c">
				StringKing
			</h1>
		</div>	
		<div class="paintSplash">
			<h3 class="c">
				For all your souped up metal needs.
			</h3>
		</div>
	</div>
</section>
<Filter />
    <main>
		{#if data.items}
		{#each categories as itemCategory}
			<h2>{itemCategory}<div class="angulate"></div></h2>
				<section>
					{#each data.items as item}
						{#if item.category == itemCategory}
						<a href="/itemPage">
							<div class="card">
								<div class="image"><img src="/images/{item.image}" alt="Placeholder Image"></div>
								<div class="caption">
									<h3>{item.name}</h3>
									<p>${item.price}.00</p>
								</div>
							</div>
						</a>
						{/if}
						{/each}
			</section>
			{/each}
			{:else}
				<p>No items found!</p>
			{/if}

		<!-- <div class="tempReel">
			<Card />
		</div> -->
		<!-- <Carousel /> -->
    </main>


<style>

	h1 {
		width: 100%;

	}
	h2{
		background-color: white;
		width: 20rem;
		padding: .5rem 1rem;
		border-radius: 10px;
		display: flex;
	}
	.angulate{
		background-color: var(--bg);
		width: 4rem;
		height: 4rem;
		transform: rotate(45deg);
		position: absolute;
		left: 24rem;
		margin-top: -.25rem;
	}
	.paintSplash{
		background-color: white;
		width: 40rem;
	}
	.c{
		text-align: center;
	}
	section{
		display: flex;
		overflow-x: scroll;
	}
	.images{
		display: flex;
	}
	.paintImg{
		position: relative;
	}
	.tempReel{
		position: relative;
    width: 100%;
    overflow: hidden;
	}
	.text{
		margin: 0 auto;
	}

	.card {
    width: 30vw;
    height: 20rem;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0 10px;
    background-color: #f0f0f0;
    display: flex;
    color: black;
}
img{
    max-width: 100%;
    border-radius: 8px;
}

.caption {
    width: 50%;
}
</style>
