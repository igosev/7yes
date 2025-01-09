<script>
  let props = $props();
</script>

<div class={["form-control", props.class]}>
  <span class=" text-gray-900 dark:text-gray-100 mb-1.5 font-medium	">
    {props.label}
    {#if !props?.required}
      <span class="text-gray-600">
        (optional)
      </span>
    {/if}
  </span>
  <select  name={props?.name ? props.name : props.label} class="select select-bordered h-auto py-4 px-5 rounded-2xl text-base text-gray-700 dark:text-gray-500 border-gray-400 dark:border-gray-700" autocomplete="on">
    {@render props?.children()}
  </select>
</div>

