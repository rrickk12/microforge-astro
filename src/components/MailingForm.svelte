<script>
  let name = "";
  let email = "";
  let status = "";

  const handleSubmit = async (data) => {
    status = "Submitting...";
    const formData = new FormData(data.currentTarget);
    const object = Object.fromEntries(formData);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(object),
    });
    const result = await response.json();
    if (result.success) {
      status = "Seu cadastro foi bem sucedido! Muito obrigado!";
    }

    const webhookResponse = await fetch(
      "https://hook.us1.make.com/k2s06wai5231ji5b5ok64towexwkeq7m",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: object.name,
          email: object.email,
          subject: "newsletter",
        }),
      }
    );
  };
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class="bg-slate-50 p-5 flex flex-col "
>
  <input
    type="hidden"
    name="access_key"
    value="ea07ad5e-9913-4bdd-90b5-6f72c98f510f"
  />
  <input type="hidden" name="subject" value="Novo cadastro na newsletter" />
  <input type="hidden" name="from_name" value="Microforge" />
  <h2 class="text-lg text-teal-900 ">Newsletter</h2>
  <p class="text-black mb-5">
    Se inscreva na nossa Newsletter e fique sabendo de notícias em biomol em
    primeira mão.
  </p>
  <input
    class="mb-5 text-black border rounded-md"
    type="text"
    name="name"
    placeholder="Nome completo"
    bind:value={name}
    required
  />
  <input
    class="mb-5 text-black border rounded-md"
    type="email"
    name="email"
    placeholder="E-mail"
    bind:value={email}
    required
  />
  <button
    class="rounded-xl text-white bg-teal-900 self-center hover:bg-amber-500 w-1/2"
    type="submit">INSCREVER</button
  >
  <p class="text-black">{status}</p>
</form>
