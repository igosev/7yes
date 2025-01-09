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
  <textarea
    name={props?.name ? props.name : props.label}
    class="textarea textarea-bordered h-auto gap-2 rounded-2xl border border-gray-400 px-5 py-4 text-gray-700 placeholder:text-gray-500 dark:border-gray-700"
    placeholder={props?.placeholder}
    rows={props?.rows}
    autocomplete="on"
  ></textarea>
</div>
