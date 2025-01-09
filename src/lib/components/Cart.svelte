<script>
  import { cart } from "../stores/cart.svelte.js";
  import Trash from "./icons/Trash.svelte";
</script>

{#if cart.items.length > 0}
  {#each cart.items as item, index}
    <div
      class="flex flex-col border-t border-gray-300 py-4 md:flex-row dark:border-gray-800"
    >
      <a href={item.link} class="shrink-0 p-0 md:p-4">
        <img
          class="w-28"
          src="/images/shop/{item.image}.png"
          alt={item.name + " image"}
        />
      </a>
      <div class="flex w-full flex-col justify-center ps-0 md:ps-6">
        <div class="flex">
          <div class="me-3 flex flex-col">
            <h3 class="mb-2">
              <a
                href={item.link}
                class="text-xl font-semibold text-gray-800 transition-colors hover:text-primary dark:text-gray-200"
              >
                {item.name}
              </a>
            </h3>
            <div
              class="flex gap-3 text-sm text-gray-600 lg:flex-col lg:gap-0 xl:flex-row xl:gap-3"
            >
              {#if item?.color}
                <div>
                  Color:
                  <span class="font-medium text-gray-900 dark:text-gray-200"
                    >{item.color}</span
                  >
                </div>
              {/if}
              {#if item?.weight}
                <div>
                  Weight:
                  <span class="font-medium text-gray-900 dark:text-gray-200"
                    >{item.weight}</span
                  >
                </div>
              {/if}
            </div>
          </div>
          <div class="ms-auto flex flex-col items-end">
            <div class="mb-2 text-xl text-gray-800 dark:text-gray-500">
              ${item.price.toFixed(2)}
            </div>
            {#if item?.oldPrice}
              <del class="text-gray-500 dark:text-gray-700">
                ${item.oldPrice.toFixed(2)}
              </del>
            {/if}
          </div>
        </div>
        <div class="-ms-4 flex font-medium">
          <button
            class="size-12 shrink-0 text-xl"
            onclick={() => cart.decreaseItemQuantity(index)}
          >
            -
          </button>
          <div class="flex w-6 items-center justify-center">{item.qty}</div>
          <button
            class="size-12 shrink-0 text-xl"
            onclick={() => cart.increaseItemQuantity(index)}
          >
            +
          </button>
        </div>
        <div class="flex justify-end">
          <button onclick={() => cart.removeItem(index)} title="Remove">
            <Trash /></button
          >
        </div>
      </div>
    </div>
  {/each}
{:else}
  <div class="flex items-center pb-8 text-gray-700">No items yet</div>
{/if}
