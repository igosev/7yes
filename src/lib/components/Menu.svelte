<script>
  import MenuIcon from "./icons/Menu.svelte";
  import X from "./icons/X.svelte";

  const menu = [
    {
      name: "Categories",
      link: "./",
      active: false,
      sub: [
        {
          name: "Category 1",
          link: "./",
          active: false,
        },
        {
          name: "Category 2",
          link: "./",
          active: false,
        },
        {
          name: "Category 3",
          link: "./",
          active: false,
        },
      ],
    },
    {
      name: "Pages",
      link: "./",
      active: true,
      sub: [
        {
          name: "Page 1",
          link: "./",
          active: false,
        },
        {
          name: "Checkout",
          link: "./",
          active: true,
        },
        {
          name: "Page 3",
          link: "./",
          active: false,
        },
      ],
    },
    {
      name: "Account",
      active: false,
      link: "./",
      sub: [
        {
          name: "Settings",
          link: "./",
          active: false,
        },
        {
          name: "Logout",
          link: "./",
          active: false,
        },
      ],
    },
    {
      name: "Blog",
      link: "./",
      active: false,
    },
    {
      name: "Reviews",
      link: "./",
      active: false,
    },
  ];

  let openMobileMenu = $state(false);

  let activeParent = $state(null);
</script>

{#snippet link(item)}
  <li class="items-start">
    <a
      href={item.link}
      class="items-start !bg-transparent px-0 py-2.5 text-base font-medium text-gray-800 hover:!text-primary focus:!text-primary active:!text-primary lg:px-4 dark:text-gray-100"
      class:active={item.active}
      class:!text-primary={item.active}
    >
      {item.name}
    </a>
  </li>
{/snippet}

<div class="order-last lg:order-none lg:me-auto">
  <div class="flex items-center lg:hidden">
    <label class="swap swap-rotate">
      <input
        type="checkbox"
        name="menu"
        autocomplete="off"
        hidden
        onchange={() => {
          openMobileMenu = !openMobileMenu;
        }}
      />
      <MenuIcon />
      <X />
    </label>
  </div>

  <div
    class="absolute right-0 top-20 me-auto w-full bg-base-100 px-4 lg:relative lg:top-0 lg:block lg:px-0"
    class:hidden={!openMobileMenu}
  >
    <ul
      class="menu rounded-2xl border border-gray-400 px-5 py-3 lg:menu-horizontal lg:rounded-none lg:border-none lg:p-0"
    >
      {#each menu as item, i}
        {#if item.sub}
          <li class="items-start">
            <button
              class="menu-dropdown-toggle justify-start !bg-transparent px-0 py-2.5 text-base font-medium text-gray-800 hover:!text-primary focus:!text-primary active:!text-primary lg:px-4 dark:text-gray-100"
              class:active={item.active}
              class:!text-primary={item.active}
              class:menu-dropdown-show={i === activeParent}
              onclick={() => {
                activeParent = activeParent === i ? null : i;
              }}
            >
              {item.name}
            </button>
            <ul
              class="menu-dropdown m-0 w-48 rounded-2xl border-gray-400 bg-base-100 ps-5 before:hidden lg:absolute lg:top-10 lg:border lg:px-5 lg:py-3 lg:shadow-lg dark:border-gray-800"
              class:menu-dropdown-show={i === activeParent}
            >
              {#each item.sub as sub}
                {@render link(sub)}
              {/each}
            </ul>
          </li>
        {:else}
          {@render link(item)}
        {/if}
      {/each}
    </ul>
  </div>
</div>
