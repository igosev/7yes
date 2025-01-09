<script>
  import { theme } from "../stores/theme.svelte.js";
  import Sun from "./icons/Sun.svelte";
  import Moon from "./icons/Moon.svelte";
</script>

<label
  class="me-3 ms-auto flex cursor-pointer items-center gap-1.5 lg:me-6 lg:ms-0 lg:gap-2.5"
  onchange={() => {
    theme.toggle();
  }}
>
  <Sun />
  <input
    type="checkbox"
    checked={theme.value === theme.dark}
    class="theme-controller toggle toggle-sm w-[46px] border-0 bg-white [--handleoffset:22px] [--tglbg:theme(colors.primary)] md:toggle-md hover:bg-white"
    name="theme toggle"
    autocomplete="off"
  />
  <Moon />
</label>
