<script>
  export let name = "";
  export let email = "";
  export let whatsapp = "";
  export let message = "";

  let status = "";
  const handleSubmit = async (data) => {
    status = "Submitting...";
    const formData = new FormData(data.currentTarget);
    const object = Object.fromEntries(formData);
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
      status = "Seu email foi enviado com sucesso!";
    }
  };
</script>

<form
  on:submit|preventDefault={handleSubmit}
  name="Contato"
  class="flex flex-col gap-2 p-8"
>
  <input
    type="hidden"
    name="access_key"
    value="ea07ad5e-9913-4bdd-90b5-6f72c98f510f"
  />
  <input
    type="hidden"
    name="subject"
    value="Nova entrada no formulário de contato"
  />
  <input type="hidden" name="from_name" value="Microforge" />
  <input type="checkbox" name="botcheck" id="" style="display: none;" />
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
    name="email"
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
  <textarea
    class="border p-1"
    name="message"
    placeholder="Mensagem"
    bind:value={message}
  />
  <button
    class="bg-teal-900 text-white rounded-xl w-1/2 mt-5 self-center"
    type="submit">Enviar</button
  >
  <p>{status}</p>
</form>
