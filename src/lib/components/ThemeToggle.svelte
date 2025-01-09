<script>
    import { theme } from '../stores/theme.svelte.js';
    import Sun from "./icons/Sun.svelte";
    import Moon from "./icons/Moon.svelte";

</script>

<label class="flex cursor-pointer gap-1.5 lg:gap-2.5 me-3 lg:me-6 ms-auto lg:ms-0 items-center" onchange={() => {theme.toggle()}}>
    <Sun />
    <input type="checkbox" checked={theme.value === theme.dark} class="toggle toggle-sm md:toggle-md theme-controller border-0 bg-white  hover:bg-white [--tglbg:theme(colors.primary)] [--handleoffset:22px] w-[46px]" name="theme toggle" autocomplete="off" />
    <Moon />
</label>