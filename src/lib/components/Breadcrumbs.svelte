<script>
  let {breadcrumbs} = $props();
</script>

<div class="breadcrumbs text-sm font-medium">
  <ul>
    {#each breadcrumbs as breadcrumb, index}
      {#if index < breadcrumbs.length - 1}
        <li class="before:-z-10">
          <a href="/" class="text-gray-600 hover:!no-underline">
            {breadcrumb}
          </a>
        </li>
      {:else}
        <li class="text-primary before:text-gray-900 dark:before:text-gray-100 before:-z-10">
          {breadcrumb}
        </li>
      {/if}
    {/each}
  </ul>
</div>