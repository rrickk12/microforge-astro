<script>
  import { isCartOpen, cartItems } from "../cartStore";
  import { fly } from "svelte/transition";
</script>

{#if $isCartOpen}
  <aside
    in:fly={{ x: 100, duration: 500 }}
    out:fly={{ x: 100, duration: 500 }}
    class="bg-slate-50 border h-screen fixed z-50 right-0 top-24 p-3 w-1/3 flex flex-col"
  >
    <button
      class="mr-2 rounded-md bg-red-100 mb-5 w-8 self-end "
      on:click={() => isCartOpen.set(false)}>X</button
    >
    {#if Object.values($cartItems).length}
      <p class="text-center mb-10 text-lg text-teal-900">Seus itens</p>

      {#each Object.values($cartItems) as cartItem}
        <li class="list-none">
          <h3 class="font-bold">{cartItem.name}</h3>
          <p>Conformação: {cartItem.size}</p>
          <p>Quantidade: {cartItem.quantity}</p>
        </li>
      {/each}
      <button
        class="mt-20 text-white p-2 rounded-xl hover:bg-amber-500 w-1/2 self-center bg-teal-900"
        >Fazer cotação</button
      >
    {:else}
      <p>Seu carrinho está vazio</p>
    {/if}
  </aside>
{/if}
