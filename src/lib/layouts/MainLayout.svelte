<script>
  import ThemeSwitch from "../components/ThemeToggle.svelte";
  import Logo from "../components/icons/Logo.svelte";
  import User from "../components/icons/User.svelte";
  import Search from "../components/icons/Search.svelte";
  import Menu from "../components/Menu.svelte";

  let { title, children } = $props();
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<header class="container sticky top-0 mx-auto flex items-center bg-base-100 px-4 md:px-8 py-5 z-50">
  <a href="/" class="lg:me-12 xl:me-24" title="7 yes">
    <Logo />
  </a>
  <Menu />
  <ThemeSwitch />
  <div class="flex gap-3 px-1.5 lg:gap-6 lg:px-3">
    <a href="/" class="link">
      <Search />
    </a>
    <a href="/" class="link">
      <User />
    </a>
  </div>
</header>

<main class="container mx-auto px-4 md:px-8 pb-6 md:pb-12">
  {@render children()}
</main>

<footer class="container mx-auto text-gray-600 text-sm px-4 md:px-8 pt-6 pb-12 lg:py-12">
  © All rights reserved. Made by <a href="/" class="text-gray-800 dark:text-gray-200 hover:text-primary transition-colors">7 yes</a>
</footer>
