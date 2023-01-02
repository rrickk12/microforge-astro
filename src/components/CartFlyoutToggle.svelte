<script>
  import { isCartOpen, cartItems } from "../cartStore";
</script>

<!--use "$" to read the store value-->
<button class="flex" on:click={() => isCartOpen.set(!$isCartOpen)}
  ><i class="fa-solid fa-cart-shopping text-2xl" />
  {#if Object.values($cartItems).length}
    <span
      class=" bg-teal-900 text-sm font-bold text-white rounded-full h-5 w-5 relative inline-block top-[-12px]"
      >{Object.values($cartItems).length}</span
    >
  {/if}
</button>
