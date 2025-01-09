<script>
  import { cart } from "../stores/cart.svelte.js";

  import MainLayout from "../layouts/MainLayout.svelte";
  import RefreshLeft from "../components/icons/RefreshLeft.svelte";
  import Breadcrumbs from "../components/Breadcrumbs.svelte";
  import Cart from "../components/Cart.svelte";
  import Input from "../components/Forms/Input.svelte";
  import Select from "../components/Forms/Select.svelte";
  import TextArea from "../components/Forms/TextArea.svelte";
  import Checkbox from "../components/Forms/Checkbox.svelte";

  let title = "Checkout";
  let breadcrumbs = ["Home", "Shop", title];

  const shipping = [
    {
      name: "Standard Delivery",
      price: 8.0,
      delivery: "5 - 8",
    },
    {
      name: "Express Shipping",
      price: 15.0,
      delivery: "3 - 5",
    },
    {
      name: "Local pickup",
      price: 0,
      delivery: "1 - 2",
    },
  ];

  let selectedShipping = $state(1);

  let total = $derived.by(() => {
    return (
      cart.sum.subtotal + cart.sum.taxes + shipping[selectedShipping].price
    );
  });
</script>

<MainLayout {title}>
  <!-- Checkout -->
  <div class="flex w-full flex-col justify-between lg:flex-row">
    <div class="lg:w-1/2">
      <Breadcrumbs {breadcrumbs} />

      <h2
        class="pb-8 pt-2 text-2xl font-semibold text-gray-900 md:py-8 md:text-2.5xl dark:text-gray-100"
      >
        Checkout
      </h2>

      <!-- Shipping details -->
      <h3 class="pb-8 text-gray-700 dark:text-gray-500">
        1. <span class="uppercase underline">Shipping details</span>
      </h3>

      <!--   Form   -->
      <div class="mb-8 grid grid-cols-2 gap-3 md:mb-14 md:gap-6">
        <Input label="First name" placeholder="Your first name" required />
        <Input label="Last name" placeholder="Your last name" required />

        <Input type="mail" label="Email" placeholder="Email address" required />
        <Input
          type="tel"
          label="First name"
          placeholder="+1 ___ ___ __"
          required
        />

        <Select label="Country" class="md:col-span-2" required>
          <option value="" selected disabled>Select a country</option>
          <option value="Australia">Australia</option>
          <option value="Belgium">Belgium</option>
          <option value="Canada">Canada</option>
          <option value="Denmark">Denmark</option>
          <option value="USA">USA</option>
        </Select>

        <Select label="City" required>
          <option value="" selected disabled>Select a city</option>
          <option value="Sydney">Sydney</option>
          <option value="Brussels">Brussels</option>
          <option value="Toronto">Toronto</option>
          <option value="Copenhagen">Copenhagen</option>
          <option value="New York">New York</option>
        </Select>
        <Input label="Zip code" placeholder="XXX-XXXX" required />

        <Input label="Address" class="md:col-span-2" required />

        <TextArea label="Order notes" rows="4" class="md:col-span-2" />

        <Checkbox name="Same address" class="md:col-span-2">
          <span class="label-text font-medium dark:text-gray-100"
            >Billing address same as delivery</span
          >
        </Checkbox>
      </div>

      <!-- Shipping method -->
      <h3 class="pb-8 text-gray-700 dark:text-gray-500">
        2. <span class="uppercase underline">Shipping method</span>
      </h3>

      <div class="mb-8 grid gap-3 md:mb-14 md:gap-6">
        {#each shipping as method, index}
          <label class="flex cursor-pointer">
            <input
              type="radio"
              name="shipping"
              class="radio radio-sm me-2 mt-0.5 border-gray-500 focus:border-primary dark:border-gray-800"
              bind:group={selectedShipping}
              value={index}
            />
            <span class="grid gap-1">
              <span class="font-medium text-gray-900 dark:text-gray-100">
                {method.name}
              </span>
              <span class="text-sm text-gray-700 dark:text-gray-500">
                Delivery in {method.delivery} working days
              </span>
            </span>
            <span
              class="ms-auto font-semibold text-gray-900 dark:text-gray-100"
            >
              {method.price ? "$" + method.price.toFixed(2) : "Free"}
            </span>
          </label>
        {/each}
      </div>

      <!-- Payment method -->
      <h3 class="pb-8 text-gray-700 dark:text-gray-500">
        3. <span class="uppercase underline">Payment method</span>
      </h3>

      <div class="mb-2 grid gap-3 md:gap-6">
        <div class="mb-8 grid gap-3 md:mb-14 md:gap-6">
          <label class="flex cursor-pointer">
            <input
              type="radio"
              name="payment"
              class="radio radio-sm me-2 mt-0.5 border-gray-500 focus:border-primary dark:border-gray-800"
              value="card"
              checked
            />
            <span class="grid gap-1">
              <span class="font-medium text-gray-900 dark:text-gray-100">
                Credit Card
              </span>
              <span class="text-sm text-gray-700 dark:text-gray-500">
                Mastercard, Maestro, American Express, Visa are accepted
              </span>
            </span>
          </label>
          <label class="flex cursor-pointer">
            <input
              type="radio"
              name="payment"
              class="radio radio-sm me-2 mt-0.5 border-gray-500 focus:border-primary dark:border-gray-800"
              value="card"
            />
            <span class="grid gap-1">
              <span class="font-medium text-gray-900 dark:text-gray-100">
                Cash on Delivery
              </span>
              <span class="text-sm text-gray-700 dark:text-gray-500">
                Pay with cash upon the delivery
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>

    <!-- Summary -->
    <div class="lg:w-5/12">
      <h2
        class="py-6 text-2xl font-semibold text-gray-900 md:pb-8 md:pt-0 md:text-2.5xl dark:text-gray-100"
      >
        Order summary
        <span class="text-base font-normal text-gray-600"
          >({cart.quantity} items)
          {#if cart.quantity !== 4}
            <button class="btn btn-sm" onclick={() => cart.reset()}
              >restart <RefreshLeft /></button
            >
          {/if}
        </span>
      </h2>

      <Cart />

      <div class="border-t border-gray-300 pt-6 dark:border-gray-800">
        <!-- Coupon -->
        <div
          class="mb-2 flex max-w-80 justify-between rounded-2xl border border-dashed border-gray-400 p-2 dark:border-gray-800"
        >
          <input
            type="text"
            name="coupon"
            placeholder="Your coupon code"
            class="bg-transparent px-3.5 py-2.5 text-xs uppercase text-gray-700 outline-none placeholder:text-gray-500 dark:text-gray-500 dark:placeholder:text-gray-700"
            autocomplete="off"
          />
          <button
            class="btn btn-sm h-auto rounded-xl border-gray-200 bg-gray-200 px-5 py-2.5 text-xs text-gray-800 hover:bg-gray-400 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-100"
          >
            Apply coupon</button
          >
        </div>
        <!-- Cost -->
        <div class="flex flex-col gap-2 py-6 text-gray-700 dark:text-gray-500">
          <div class="flex w-full justify-between">
            <div>Subtotal:</div>
            <div class="font-semibold">${cart.sum.subtotal.toFixed(2)}</div>
          </div>
          <div class="flex w-full justify-between">
            <div>Taxes:</div>
            <div class="font-semibold">${cart.sum.taxes.toFixed(2)}</div>
          </div>
          <div class="flex w-full justify-between">
            <div>Shipping cost:</div>
            <div class="font-semibold">
              ${shipping[selectedShipping].price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
      <!-- Total -->
      <div
        class="flex w-full justify-between border-t border-gray-300 pt-6 dark:border-gray-800"
      >
        <div class="text-xl text-gray-700 dark:text-gray-500">Total:</div>
        <div
          class="text-2xl font-semibold text-gray-900 md:text-2.5xl dark:text-gray-100"
        >
          ${total.toFixed(2)}
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8 grid gap-6 lg:mt-0 lg:w-6/12">
    <Checkbox name="policy" class="md:col-span-2" checked>
      <span class="label-text text-gray-600">
        Your personal information will be used to process your order, to support
        your experience on this site and for other purposes described in the <a
          href="/"
          class="link link-primary">privacy policy</a
        >
      </span>
    </Checkbox>
    <button
      class="btn btn-primary h-auto rounded-2xl px-8 py-4 text-base text-white"
      >Place an order</button
    >
  </div>
</MainLayout>
