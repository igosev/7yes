<script>
  import Envelope from "../icons/Envelope.svelte";
  import Phone from "../icons/Phone.svelte";

  // let props = $props();
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
  <label class="input flex items-center h-auto gap-4 py-4 px-5 text-gray-700 border border-gray-400 dark:border-gray-700 rounded-2xl focus:border-gray-700 ">
    {#if props.type === "mail"}
      <Envelope />
    {/if}
    {#if props.type === "tel"}
      <Phone />
    {/if}
    <input type={props.type ? props.type : "text"} name={props?.name ? props.name : props.label} class="text-gray-700
    dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-700 w-full" placeholder={props?.placeholder} autocomplete="on" />
  </label>
</div>
