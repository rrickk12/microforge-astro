<script>
  export let name = "";
  export let email = "";
  export let whatsapp = "";
  export let message = "";
</script>

<form action="POST" data-netlify="true" class="flex flex-col gap-2 p-8">
  <label class="text-teal-900" for="name">Seu nome*</label>
  <input
    class="border mb-5 p-1"
    name="name"
    type="text"
    placeholder="Nome completo"
    bind:value={name}
    required
  />
  <label class="text-teal-900" for="email">Seu e-mail*</label>
  <input
    class="border mb-5 p-1"
    type="email"
    placeholder="E-mail"
    bind:value={email}
    required
  />
  <label class="text-teal-900" for="whatsapp"
    >Telefone de contato/Whatsapp</label
  >
  <input
    class="border mb-5 p-1"
    name="whatsapp"
    type="tel"
    placeholder="WhatsApp"
    bind:value={whatsapp}
  />
  <label class="text-teal-900" for="message">Sua Mensagem*</label>
  <textarea class="border p-1" placeholder="Mensagem" bind:value={message} />
  <button
    class="bg-teal-900 text-white rounded-xl w-1/2 mt-5 self-center"
    type="submit">Enviar</button
  >
</form>
