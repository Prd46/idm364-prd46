<script>
    import { setContext } from "svelte";
</script>

<section>
    <button on:click={() => setContext('categorySelection', "7-String")}>
        <h3>7-String</h3>
    </button>
    <button on:click={() => setContext('categorySelection', "8-String")}>
        <h3>8-String</h3>
    </button>
    <button on:click={() => setContext('categorySelection', "Amp")}>
        <h3>Amp</h3>
    </button>
    <button on:click={() => setContext('categorySelection', "Pre-Amp")}>
        <h3>Pre-Amp</h3>
    </button>
    <button on:click={() => setContext('categorySelection', "Cable")}>
        <h3>Cable</h3>
    </button>
    <button on:click={() => setContext('categorySelection', "Strings")}>
        <h3>Strings</h3>
    </button>
</section>


<style>
    section{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center
    }
    button{
        padding: 0 .25rem;
        border-radius: 5rem;
        width: 8rem;
        background-color: aliceblue;
        margin: .5rem;
    }
    h3{
        text-align: center;
        font-size: 1.25rem;
    }
</style>