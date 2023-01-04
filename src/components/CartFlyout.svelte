<script>
  import { isCartOpen, cartItems } from "../cartStore";
  import { removeCartItem } from "../cartStore";
  import { fly } from "svelte/transition";

  export let name = "";
  export let institution = "";
  export let email = "";
  let status = "";

  const handleSubmit = async (data) => {
    status = "Submitting...";
    const formData = new FormData(data.currentTarget);
    let object = Object.fromEntries(formData);
    object = { ...object, products: JSON.stringify(cartItems.get()) };
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      status = "Sua cotação foi enviada com sucesso!";
    }
  };
</script>

{#if $isCartOpen}
  <aside
    in:fly={{ x: 100, duration: 500 }}
    out:fly={{ x: 100, duration: 500 }}
    class="bg-slate-50 border fixed h-5/6 overflow-auto z-50 top-24 right-0 p-3 md:w-1/3 flex flex-col"
  >
    <button
      class="mr-2 rounded-md bg-red-100 mb-5 w-8 self-end "
      on:click={() => isCartOpen.set(false)}>X</button
    >
    <form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-2">
      <input
        type="hidden"
        name="access_key"
        value="ea07ad5e-9913-4bdd-90b5-6f72c98f510f"
      />
      <input type="checkbox" name="botcheck" id="" style="display: none;" />
      {#if Object.values($cartItems).length}
        <p class="text-center mb-10 text-lg text-teal-900">Seus itens</p>

        {#each Object.values($cartItems) as cartItem}
          <li class="list-none mb-5 flex gap-3 border rounded-lg p-2">
            <img class="w-24" src={cartItem.imageSrc} alt={cartItem.name} />
            <div>
              <h3 class="font-bold">{cartItem.name}</h3>
              <p>Conformação: {cartItem.size}</p>
              <p>Quantidade: {cartItem.quantity}</p>
              <button on:click={removeCartItem(cartItem.name)}
                ><i class="fas fa-trash text-amber-500" /></button
              >
            </div>
          </li>
        {/each}

        <p class="text-teal-900">Dados para cotação</p>
        <p>{status}</p>
        <label for="name">Nome</label>
        <input
          required
          name="name"
          type="text"
          placeholder="Nome completo"
          bind:value={name}
        />
        <label for="institution">Instituição</label>
        <input
          required
          name="institution"
          type="text"
          placeholder="Laboratório ou empresa"
          bind:value={institution}
        />
        <label for="email">Email</label>
        <input
          required
          name="email"
          type="email"
          placeholder="Seu email para a cotação"
          bind:value={email}
        />

        <button
          type="submit"
          class="mt-20 text-white p-2 rounded-xl hover:bg-amber-500 w-1/2 self-center bg-teal-900"
          >Fazer cotação</button
        >
      {:else}
        <p>Seu carrinho está vazio</p>
      {/if}
    </form>
  </aside>
{/if}
