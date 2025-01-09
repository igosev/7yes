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
  <textarea name={props?.name ? props.name : props.label} class="textarea textarea-bordered h-auto gap-2 py-4 px-5 text-gray-700 placeholder:text-gray-500 border border-gray-400 dark:border-gray-700 rounded-2xl" placeholder={props?.placeholder} rows={props?.rows} autocomplete="on" ></textarea>
</div>
