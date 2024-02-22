<!-- src/routes/teams/+page.svelte -->
<script lang="js">
    export let data;
  </script>
  
  <h1>Teams</h1>
  <p>Select a team for more details.</p>
{#each data.teams as { image, name, price, slug }} 
<!-- get all the items from the data list and write out the details as variables to use. -->
    <a href="/teams/{slug}">
    
    <!-- {#each tempData as { image, name, price}} -->
    <!-- <a href="/itemPage"> -->
            <div class="card">
                <!-- How do I put a prop in for the image name to complete the image source if I have to import images? -->
                <div class="image"><img src="/images/{image}.jpeg" alt="Placeholder Image"></div>
                <div class="caption">
                    <p>{name}</p>
                    <p>{price}</p>
                    </div>
                </div>
            </a>
        {/each}