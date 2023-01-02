<script>
  import { addCartItem, isCartOpen } from "../cartStore";

  function addToCart() {
    isCartOpen.set(true);
    addCartItem({
      name: "Hardcoded Item",
      size: "Hardcoded Size",
      quantity: 1,
    });
    console.log(hardcodedItemInfo);
  }
</script>

<form on:submit|preventDefault={addToCart}>
  <slot />
</form>
