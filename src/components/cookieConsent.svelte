<script>
  export let cookieConsent = localStorage.getItem("cookieConsent");

  export function setCookieConsent() {
    localStorage.setItem("cookieConsent", true);
    const consent = document.getElementById("consent");
    consent.style.display = "none";
  }
</script>

{#if !cookieConsent}
  <div id="consent" class="fixed bottom-0 p-2 w-full bg-white z-50">
    <p>
      Utilizamos cookies para melhorar a experiência no nosso website. Ao
      utilizá-lo você concorda com o uso dos cookies nos termos descritos na
      nossa <span
        ><a class="mr-5" href="politica">Política de Privacidade</a></span
      >
      <button
        class="p-2 bg-teal-900 hover:bg-amber-500 text-white"
        on:click={setCookieConsent}>Aceitar</button
      >
    </p>
  </div>
{/if}
