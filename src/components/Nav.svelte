<script>
    import ModeSwitcher from './ModeSwitcher.svelte';
  </script>
  
  <style>
    .glass {
      backdrop-filter: blur(10px);
    }
  </style>
  
  <div class="flex items-center justify-between px-3 py-1 sticky top-0 z-50 glass">
    <h1 class="uppercase text-3xl sm:text-4xl text-bold leading-normal font-thin">Abstractii</h1>
    <div class="md:scale-75 scale-50 self-end">
      <ModeSwitcher />
    </div>
  </div>
  