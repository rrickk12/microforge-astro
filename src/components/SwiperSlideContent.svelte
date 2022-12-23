<script>
  export let title;
  export let description;
  export let imageSrc;
  export let imageAlt;
  export let btnColor;
</script>

<div
  class="grid grid-cols-2 bg-slate-50/75 p-8 rounded-xl  lg:ml-20 lg:w-7/12 "
>
  <div class="mt-5">
    <h2 class="text-2xl font-bold mb-4 text-teal-900">
      {title}
    </h2>
    <p class="mb-4">
      {description}
    </p>
    <button
      class={`${btnColor} rounded-2xl text-white p-3 hover:cursor-pointer hover:opacity-75`}
      >saiba mais</button
    >
  </div>
  <img
    class="h-3/4 justify-self-center self-center"
    src={imageSrc}
    alt={imageAlt}
  />
</div>
