<script>
    import MenuIcon from './icons/Menu.svelte';
    import X from "./icons/X.svelte";

    const menu = [
        {
            name: "Categories",
            link: "/",
            active: false,
            sub: [
                {
                    name: "Category 1",
                    link: "/",
                    active: false,
                },
                {
                    name: "Category 2",
                    link: "/",
                    active: false,
                },
                {
                    name: "Category 3",
                    link: "/",
                    active: false,
                }
            ]
        },
        {
            name: "Pages",
            link: "/",
            active: true,
            sub: [
                {
                    name: "Page 1",
                    link: "/",
                    active: false,
                },
                {
                    name: "Checkout",
                    link: "/",
                    active: true,
                },
                {
                    name: "Page 3",
                    link: "/",
                    active: false,
                }
            ]
        },
        {
            name: "Account",
            active: false,
            link: "/",
            sub: [
                {
                    name: "Settings",
                    link: "/",
                    active: false,
                },
                {
                    name: "Logout",
                    link: "/",
                    active: false,
                },
            ]
        },
        {
            name: "Blog",
            link: "/",
            active: false,
        },
        {
            name: "Reviews",
            link: "/",
            active: false,
        },
    ]

    let openMobileMenu = $state(false)

    let activeParent = $state(null);
</script>

{#snippet link(item)}
    <li class="items-start">
        <a
            href={item.link}
            class="items-start px-0 lg:px-4 py-2.5 text-base font-medium text-gray-800 !bg-transparent hover:!text-primary active:!text-primary focus:!text-primary dark:text-gray-100"
            class:active={item.active}
            class:!text-primary={item.active}
        >
            {item.name}
        </a>
    </li>
{/snippet}

<div class="order-last lg:order-none lg:me-auto">
    <div class="flex lg:hidden items-center">
        <label class="swap swap-rotate">
            <input type="checkbox" name="menu" autocomplete="off" hidden onchange={() => {openMobileMenu = !openMobileMenu}}/>
            <MenuIcon />
            <X />
        </label>
    </div>

    <div class="w-full absolute lg:relative top-20 lg:top-0 right-0 lg:block me-auto px-4 lg:px-0 bg-base-100" class:hidden={!openMobileMenu}>
        <ul class="menu lg:menu-horizontal px-5 py-3 lg:p-0 border border-gray-400 lg:border-none rounded-2xl lg:rounded-none">
            {#each menu as item, i}
                {#if item.sub}
                    <li class="items-start">
                        <button
                            class="menu-dropdown-toggle justify-start px-0 lg:px-4 py-2.5 text-gray-800 !bg-transparent hover:!text-primary active:!text-primary focus:!text-primary text-base dark:text-gray-100 font-medium"
                            class:active={item.active}
                            class:!text-primary={item.active}
                            class:menu-dropdown-show={i === activeParent}
                            onclick={() => {activeParent = activeParent === i ? null : i; }}
                        >
                            {item.name}
                        </button>
                        <ul
                            class="menu-dropdown bg-base-100 w-48 lg:absolute lg:top-10 m-0 ps-5 before:hidden lg:px-5 lg:py-3 border-gray-400 dark:border-gray-800 lg:border rounded-2xl lg:shadow-lg"
                            class:menu-dropdown-show={  i === activeParent}
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
