<script lang="ts">
	import ModeSwitcher from './ModeSwitcher.svelte';
	import Tailwindcss from './Tailwindcss.svelte';
	import Gallery from './components/Gallery.svelte';	
</script>
<!-- ${darkMode ? 'text-white':'text-black'} -->
<Tailwindcss />
<ModeSwitcher />
<main class="p-4 mx-auto text-center ">
<h1 class={`uppercase sm:text-4xl text-6xl leading-normal font-thin `}>Abstractii</h1>
<Gallery />

</main>