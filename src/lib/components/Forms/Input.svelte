<script>
  import Envelope from "../icons/Envelope.svelte";
  import Phone from "../icons/Phone.svelte";

  // let props = $props();
  let props = $props();
</script>

<div class={["form-control", props.class]}>
  <span class=" mb-1.5 font-medium text-gray-900 dark:text-gray-100">
    {props.label}
    {#if !props?.required}
      <span class="text-gray-600"> (optional) </span>
    {/if}
  </span>
  <label
    class="input flex h-auto items-center gap-4 rounded-2xl border border-gray-400 px-5 py-4 text-gray-700 focus:border-gray-700 dark:border-gray-700"
  >
    {#if props.type === "mail"}
      <Envelope />
    {/if}
    {#if props.type === "tel"}
      <Phone />
    {/if}
    <input
      type={props.type ? props.type : "text"}
      name={props?.name ? props.name : props.label}
      class="w-full
    text-gray-700 placeholder:text-gray-500 dark:text-gray-100 dark:placeholder:text-gray-700"
      placeholder={props?.placeholder}
      autocomplete="on"
    />
  </label>
</div>
