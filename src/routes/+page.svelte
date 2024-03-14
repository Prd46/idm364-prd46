<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	// import Carousel from './Carousel.svelte';
	// import Card from './Card.svelte';
	// import Filter from './Filter.svelte';
	// const pageTitle = document.title;
	export let data;
	// let items = [];


let categories = ["7-String", "8-String", "Amp", "Pre-Amp", "Cable", "Strings"];
// $:{
// 	console.log(data)
// }

// const paintAreas = document.querySelectorAll(".paintSplash");
// paintAreas.forEach((paintArea) =>{
// 	for (let i = 0; i < 10; i++) {
// 		let div = createElement("div");
// }
// });

// function filter(category) {
//       filteredProducts = data.filter(product => product.category === category);
//     }
  
//     function updateCategory(name, description) {
//       let dbCategoryName = "";
//       switch (name) {
//         case "The Classics":
//           dbCategoryName = "classic";
//           break;
//         case "Rise & Shine":
//           dbCategoryName = "riseandshine";
//           break;
//         case "H*t T*pic":
//           dbCategoryName = "hottopic";
//           break;
//         default:
//           dbCategoryName = "classic"; // Default category
//       }
  
//       catname = name;
//       catdescription = description;
//       filter(dbCategoryName);
//     }



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
<!-- <div class="filter">
	<button on:click={() => filter('categorySelection', "7-String")}>
		7-String
	</button>
	<button on:click={() => setContext('categorySelection', "8-String")}>
		8-String
	</button>
	<button on:click={() => setContext('categorySelection', "Amp")}>
		Amp
	</button>
	<button on:click={() => setContext('categorySelection', "Pre-Amp")}>
		Pre-Amp
	</button>
	<button on:click={() => setContext('categorySelection', "Cable")}>
		Cable
	</button>
	<button on:click={() => setContext('categorySelection', "Strings")}>
		Strings
	</button>
</div> -->

    <main>
		{#if data.items}
		{#each categories as itemCategory}
			<h2>{itemCategory}<div class="angulate"></div></h2>
				<section class="carousel">
					<div class="arrow leftArrow"><h1>⇦</h1></div>
					<div class="arrow rightArrow"><h1>⇦</h1></div>
					{#each data.items as item}
						{#if item.category == itemCategory}
						<a href="/items/{item.category}/{item.id}">
							<div class="card">
								<div class="image"><img src="{item.altImageUrl}" alt="Placeholder Image"></div>
								<div class="caption">
									<h3 class="itemName">{item.name}</h3>
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
		border-radius: 10px;
	}
	.c{
		text-align: center;
	}
	section{
		display: flex;
	}
	.carousel{
		overflow-x: scroll;
	}
	.text{
		margin: 0 auto;
	}

	.card {
    width: 500px;
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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
    width: 50%;
	padding: 0 1rem;
}
.itemName{
	height: 10rem;
	-ms-word-break: break-all;
  	word-break: break-all;
	overflow-y: hidden;
	word-break: break-word;
	-webkit-hyphens: auto;
	-moz-hyphens: auto;
	hyphens: auto;
}
.arrow{
	background-color: rgba(173, 216, 230, 0.447);
	height: 20rem;
	width: 4rem;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	justify-items: center;
	padding-left: 4rem;
	opacity: 10%;
	transition: all .3s ease-out;
}
.arrow:hover{
	cursor: pointer;
	opacity: 100%;
}
.rightArrow{
	right: 3rem;
	transform: rotate(180deg);
}
.leftArrow{
	left: 4.5rem;
}

button{
        padding: 0 .25rem;
        border-radius: 5rem;
        width: 8rem;
        background-color: aliceblue;
        margin: .5rem;
        text-align: center;
        padding: 1rem;
        font-size: 1.25rem;
        font-family: var(--ptext);
    }
</style>
