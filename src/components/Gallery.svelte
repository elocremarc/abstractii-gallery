<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchIframes } from '../services/fetchIframes';
  let galleryItems = [];

  onMount(async () => {
    galleryItems = await fetchIframes();
  });
</script>

<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {#each galleryItems as item (item.id)}
    <div class="w-64 rounded h-64 shadow-lg">
      <div class="">
        <iframe src={`https://ordinals.com/content/${item.id}`} title={item.meta.name} class="w-64 h-64"></iframe>
      </div>
    </div>
  {/each}
</section>
