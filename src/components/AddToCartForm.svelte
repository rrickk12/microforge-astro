<script>
  import { addCartItem, isCartOpen } from "../cartStore";

  function addToCart(e) {
    isCartOpen.set(true);
    const formData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    addCartItem(data);
  }
</script>

<form on:submit|preventDefault={addToCart}>
  <slot />
</form>
