<script>
  import { isCartOpen, cartItems } from "../cartStore";
</script>

<!--use "$" to read the store value-->
<button class="flex" on:click={() => isCartOpen.set(!$isCartOpen)}
  >Cart <span class="text-xs border rounded-lg">
    {#if Object.values($cartItems).length}
      {Object.values($cartItems).length}
    {/if}
  </span></button
>
