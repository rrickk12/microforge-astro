<script>
  import { isCartOpen, cartItems } from "../cartStore";
</script>

<!--use "$" to read the store value-->
<button class="flex" on:click={() => isCartOpen.set(!$isCartOpen)}
  >Cart
  {#if Object.values($cartItems).length}
    <span class="text-xs border rounded-lg"
      >{Object.values($cartItems).length}</span
    >
  {/if}
</button>
