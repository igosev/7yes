<script>
  import {cart} from "../stores/cart.svelte.js";
  import Trash from "./icons/Trash.svelte";
</script>

{#if cart.items.length > 0}
  {#each cart.items as item, index}
    <div class="flex flex-col md:flex-row py-4 border-t border-gray-300 dark:border-gray-800">
      <a href={item.link} class="p-0 md:p-4 shrink-0 " >
        <img class="w-28" src="/images/shop/{item.image}.png" alt={item.name + " image"}>
      </a>
      <div class="flex flex-col justify-center w-full ps-0 md:ps-6">
        <div class="flex">
          <div class="flex flex-col me-3">
            <h3 class="mb-2">
              <a href={item.link} class="text-gray-800 dark:text-gray-200 text-xl font-semibold transition-colors hover:text-primary" >
                {item.name}
              </a>
            </h3>
            <div class="flex gap-3 lg:flex-col lg:gap-0 xl:flex-row xl:gap-3 text-gray-600 text-sm">
              {#if item?.color}
                <div>
                  Color:
                  <span class="text-gray-900 dark:text-gray-200 font-medium">{item.color}</span>
                </div>
              {/if}
              {#if item?.weight}
                <div>
                  Weight:
                  <span class="text-gray-900 dark:text-gray-200 font-medium">{item.weight}</span>
                </div>
              {/if}
            </div>
          </div>
          <div class="flex flex-col items-end ms-auto">
            <div class="text-gray-800 dark:text-gray-500 text-xl mb-2">
              ${item.price.toFixed(2)}
            </div>
            {#if item?.oldPrice}
              <del class="text-gray-500 dark:text-gray-700">
                ${item.oldPrice.toFixed(2)}
              </del>
            {/if}
          </div>
        </div>
        <div class="flex font-medium -ms-4">
          <button
            class="text-xl size-12 shrink-0"
            onclick={() => cart.decreaseItemQuantity(index)}
          >
            -
          </button>
          <div class="flex items-center justify-center w-6"> {item.qty} </div>
          <button
            class="text-xl size-12 shrink-0"
            onclick={() => cart.increaseItemQuantity(index)}
          >
            +
          </button>
        </div>
        <div class="flex justify-end">
          <button onclick="{() => cart.removeItem(index)}" title="Remove"> <Trash /></button>
        </div>
      </div>
    </div>
  {/each}
{:else}
  <div class="flex items-center pb-8 text-gray-700">
    No items yet
  </div>
{/if}