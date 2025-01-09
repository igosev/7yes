<script>
  let props = $props();
</script>

<div class={["form-control", props.class]}>
  <span class=" mb-1.5 font-medium text-gray-900 dark:text-gray-100">
    {props.label}
    {#if !props?.required}
      <span class="text-gray-600"> (optional) </span>
    {/if}
  </span>
  <select
    name={props?.name ? props.name : props.label}
    class="select select-bordered h-auto rounded-2xl border-gray-400 px-5 py-4 text-base text-gray-700 dark:border-gray-700 dark:text-gray-500"
    autocomplete="on"
  >
    {@render props?.children()}
  </select>
</div>
