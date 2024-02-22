<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Carousel from './Carousel.svelte';
	import Card from './Card.svelte';
	import Filter from './Filter.svelte';
	export let titleV = "Home";
	// const pageTitle = document.title;
</script>

<svelte:head>
	<title>{titleV}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
    <main>
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
		<Carousel />
    </main>


<style>

	h1 {
		width: 100%;

	}
	section{
		display: flex;
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
</style>
