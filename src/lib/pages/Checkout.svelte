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
      price: 8.00,
      delivery: "5 - 8"
    },
    {
      name: "Express Shipping",
      price: 15.00,
      delivery: "3 - 5"
    },
    {
      name: "Local pickup",
      price: 0,
      delivery: "1 - 2"
    }
  ]

  let selectedShipping = $state(1);

  let total = $derived.by(() => {
    return cart.sum.subtotal + cart.sum.taxes + shipping[selectedShipping].price;
  })
</script>

<MainLayout {title}>
  <!-- Checkout -->
  <div class="flex flex-col lg:flex-row w-full justify-between">
    <div class="lg:w-1/2">

      <Breadcrumbs {breadcrumbs} />

      <h2 class="font-semibold pt-2 pb-8 md:py-8 text-2xl md:text-2.5xl text-gray-900 dark:text-gray-100">Checkout</h2>

      <!-- Shipping details -->
      <h3 class="text-gray-700 dark:text-gray-500 pb-8">1. <span class="underline uppercase">Shipping details</span></h3>

      <!--   Form   -->
      <div class="grid grid-cols-2 gap-3 md:gap-6 mb-8 md:mb-14">
        <Input label="First name" placeholder="Your first name" required  />
        <Input label="Last name" placeholder="Your last name" required />

        <Input type="mail" label="Email" placeholder="Email address" required />
        <Input type="tel" label="First name" placeholder="+1 ___ ___ __" required />

        <Select label="Country" class="md:col-span-2" required >
          <option value="" selected disabled>Select a country</option>
          <option value="Australia">Australia</option>
          <option value="Belgium">Belgium</option>
          <option value="Canada">Canada</option>
          <option value="Denmark">Denmark</option>
          <option value="USA">USA</option>
        </Select>

        <Select label="City" required >
          <option value="" selected disabled>Select a city</option>
          <option value="Sydney">Sydney</option>
          <option value="Brussels">Brussels</option>
          <option value="Toronto">Toronto</option>
          <option value="Copenhagen">Copenhagen</option>
          <option value="New York">New York</option>
        </Select>
        <Input label="Zip code" placeholder="XXX-XXXX" required />

        <Input label="Address" class="md:col-span-2" required />

        <TextArea label="Order notes" rows="4" class="md:col-span-2"/>

        <Checkbox name="Same address" class="md:col-span-2" >
          <span class="label-text font-medium dark:text-gray-100">Billing address same as delivery</span>
        </Checkbox>
      </div>

      <!-- Shipping method -->
      <h3 class="text-gray-700 dark:text-gray-500 pb-8">2. <span class="underline uppercase">Shipping method</span></h3>

      <div class="grid gap-3 md:gap-6 mb-8 md:mb-14">
        {#each shipping as method, index}
          <label class="flex cursor-pointer">
            <input type="radio" name="shipping" class="radio radio-sm mt-0.5 me-2 border-gray-500 dark:border-gray-800 focus:border-primary" bind:group={selectedShipping} value={index} />
            <span class="grid gap-1">
              <span class="font-medium text-gray-900 dark:text-gray-100">
                {method.name}
              </span>
              <span class="text-sm text-gray-700 dark:text-gray-500">
                Delivery in {method.delivery} working days
              </span>
            </span>
            <span class="ms-auto font-semibold text-gray-900 dark:text-gray-100">
              {method.price ? "$"+method.price.toFixed(2) : "Free"}
            </span>
          </label>
        {/each}
      </div>

      <!-- Payment method -->
      <h3 class="text-gray-700 dark:text-gray-500 pb-8">3. <span class="underline uppercase">Payment method</span></h3>

      <div class="grid gap-3 md:gap-6 mb-2">
        <div class="grid gap-3 md:gap-6 mb-8 md:mb-14">
            <label class="flex cursor-pointer">
              <input type="radio" name="payment" class="radio radio-sm mt-0.5 me-2 border-gray-500 dark:border-gray-800 focus:border-primary" value="card" checked />
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
              <input type="radio" name="payment" class="radio radio-sm mt-0.5 me-2 border-gray-500 dark:border-gray-800 focus:border-primary" value="card" />
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
      <h2 class="font-semibold text-2xl md:text-2.5xl py-6 md:pb-8 md:pt-0 text-gray-900 dark:text-gray-100">
        Order summary
        <span class="font-normal text-base text-gray-600">({cart.quantity} items)
          {#if cart.quantity !== 4}
            <button class="btn btn-sm" onclick={() => cart.reset()}>restart <RefreshLeft /></button>
          {/if}
        </span>
      </h2>

      <Cart />

      <div class="pt-6 border-t border-gray-300 dark:border-gray-800">
        <!-- Coupon -->
        <div class="flex justify-between max-w-80 p-2 mb-2 border border-dashed border-gray-400 dark:border-gray-800  rounded-2xl">
          <input type="text" name="coupon" placeholder="Your coupon code" class="uppercase text-xs py-2.5 px-3.5 outline-none text-gray-700 dark:text-gray-500 placeholder:text-gray-500 dark:placeholder:text-gray-700 bg-transparent" autocomplete="off">
          <button class="btn btn-sm h-auto py-2.5 px-5 text-gray-800 dark:text-gray-200 text-xs bg-gray-200 dark:bg-gray-800 border-gray-200 dark:border-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700 dark:hover:border-gray-700 hover:text-gray-900 dark:hover:text-gray-100 rounded-xl	"> Apply coupon</button>
        </div>
        <!-- Cost -->
        <div class="flex flex-col py-6 gap-2 text-gray-700 dark:text-gray-500 ">
          <div class="flex justify-between w-full">
            <div>Subtotal:</div>
            <div class="font-semibold">${cart.sum.subtotal.toFixed(2)}</div>
          </div>
          <div class="flex justify-between w-full">
            <div>Taxes:</div>
            <div class="font-semibold">${cart.sum.taxes.toFixed(2)}</div>
          </div>
          <div class="flex justify-between w-full">
            <div>Shipping cost:</div>
            <div class="font-semibold">${shipping[selectedShipping].price.toFixed(2)}</div>
          </div>
        </div>
      </div>
      <!-- Total -->
      <div class="flex justify-between w-full pt-6 border-t border-gray-300 dark:border-gray-800">
        <div class="text-gray-700 dark:text-gray-500 text-xl">Total:</div>
        <div class="text-2xl md:text-2.5xl font-semibold text-gray-900 dark:text-gray-100">${total.toFixed(2)}</div>
      </div>
    </div>
  </div>

  <div class="grid gap-6 mt-8 lg:mt-0 lg:w-6/12">
    <Checkbox name="policy" class="md:col-span-2" checked>
      <span class="label-text text-gray-600">
        Your personal information will be used to process your order, to support your experience on this site and for other purposes described in the <a href="/" class="link link-primary">privacy policy</a>
      </span>
    </Checkbox>
    <button class="btn btn-primary h-auto text-white text-base rounded-2xl py-4 px-8">Place an order</button>
  </div>
</MainLayout>
