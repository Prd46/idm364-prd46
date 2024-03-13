<script>
	import { page } from '$app/stores';
	import {goto} from '$app/navigation'
    import { cart } from '$lib/cart.js';
    // import Img from '../lib/images/github.svg';
</script>
<!-- Make header prop -->

<header>
	<div class="header_buttonBox">
            <button on:click={() => goto('/')}><h3 class="footer_pageLink">Home</h3></button>
            <button on:click={() => goto('/cartPage')}><h3 class="footer_pageLink">Cart</h3></button>
            {#if $cart.length>0}
                <div class="notifCircle">
                    <h4>{$cart.length}</h4>
                </div>
            {/if}
	</div>
</header>

<style>
    @keyframes growIn{
        0%{
           transform: scale(0%);
        }100%{
            transform: scale(100%);
        }
    }
    .header_buttonBox{
        display: flex;
        width: 100%;
    }
    
    h3{
                color: white;
            }
        .footer_pageLink{
            /* background: var(--headerTextColor); */
            font-size: 1.5rem;
            padding: var(--smallBuffer) 1.5rem;
            border-radius: var(--brsmall);
            transition: var(--tsn);
            border: solid 1px white;
            margin-right: 1rem;
            z-index: 5;
        }
        .footer_pageLink:hover{
            background: var(--headerTextColor);
            color: var(--bg);
            transition: var(--tsn);
        }
        .notifCircle{
            animation: growIn .5s ease-in-out forwards;
            background-color: var(--bg);
            border: solid 1px white;
            border-radius: 40px;
            padding: .5rem;
            height: 16px;
            width: 16px;
            position: relative;
            right: 2rem;
            top: .5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;
        }
        h4{
            z-index: 100;
        }
    </style>
    