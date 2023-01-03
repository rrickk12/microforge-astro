<script>
  let name = "";
  let email = "";
</script>

<form
  class="bg-slate-50 p-2 flex flex-col w-3/4"
  action="POST"
  data-netlify="true"
  id="mailing"
>
  <h2 class="text-lg text-teal-900 ">Newsletter</h2>
  <p class="text-black mb-5">
    Se inscreva na nossa Newsletter e fique sabendo de notícias em biomol em
    primeira mão.
  </p>
  <input
    class="mb-5"
    type="text"
    placeholder="Nome completo"
    bind:value={name}
    required
  />
  <input
    class="mb-5"
    type="email"
    placeholder="E-mail"
    bind:value={email}
    required
  />
  <button
    class="rounded-xl bg-teal-900 self-center hover:bg-amber-500 w-1/2"
    type="submit">INSCREVER</button
  >
</form>
