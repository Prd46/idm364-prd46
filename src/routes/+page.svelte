<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Carousel from './Carousel.svelte';
	import Card from './Card.svelte';
	import Filter from './Filter.svelte';
	export let titleV = "Home";
	// const pageTitle = document.title;
	export let data;
let categories = ["7-String", "8-String", "Amp", "Pre-Amp", "Cable", "Strings"];
$:{
	console.log(data)
}
</script>

<svelte:head>
	<title>{titleV}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

    <main>
		{#if data.items}
		{#each categories as itemCategory}
			<h2>{itemCategory}</h2>
			<section>
				
					{#each data.items as item}
						{#if item.category == itemCategory}
						<a href="/itemPage">
							<div class="card">
								<div class="image"><img src="/images/{item.image}" alt="Placeholder Image"></div>
								<div class="caption">
									<h3>{item.name}</h3>
									<p>{item.price}</p>
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
		<section>
			<div class="images">
				<!-- <img class="paintImg" src='/images/paint.png' alt="Paintsplatter" /> -->
			</div>
			<div class="text">
				{#if titleV == "Home" }
				<p>This paragraph is visible</p>
				{/if}
				<h1>
					StringKing
				</h1>
				<h3>
					For all your souped up metal needs.
				</h3>
			</div>
		</section>
		<Filter />
		<!-- <div class="tempReel">
			<Card />
		</div> -->
		<!-- <Carousel /> -->
    </main>


<style>

	h1 {
		width: 100%;

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
