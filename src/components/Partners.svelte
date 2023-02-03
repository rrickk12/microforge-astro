<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import foxesImg from "../images/partners/foxes.webp";
  import bioventImg from "../images/partners/biovent.webp";
  import ecomolImg from "../images/partners/ecomol.webp";
  import unicampImg from "../images/partners/unicamp.webp";
  import unespImg from "../images/partners/unesp.webp";
  import lgeImg from "../images/partners/lge.webp";

  const partners = [
    {
      name: "FoxES",
      logo: foxesImg,
      link: "https://foxeslaboratorios.com/",
    },
    {
      name: "Biovent",
      logo: bioventImg,
      link: "https://biovent.com.br/",
    },
    {
      name: "Ecomol",
      logo: ecomolImg,
      link: "https://ecomolconsultoria.com.br/",
    },
    {
      name: "Unicamp",
      logo: unicampImg,
      link: "https://www.unicamp.br/unicamp/",
    },
    {
      name: "Unesp",
      logo: unespImg,
      link: "https://www2.unesp.br/",
    },
    {
      name: "LGE",
      logo: lgeImg,
      link: "https://www.lge.ibi.unicamp.br/",
    },
  ];

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/autoplay";
  import "swiper/css/pagination";

  // import required modules
  import { Autoplay, Pagination } from "swiper";
</script>

<h2 class="mb-5 text-center text-2xl font-bold text-teal-900">
  Nossos parceiros
</h2>
<Swiper
  pagination={{
    clickable: true,
  }}
  loop={true}
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 5000 }}
  slidesPerView={3}
  breakpoints={{
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  }}
  speed={800}
  class="md:w-3/4 mb-10"
>
  {#each partners as partner}
    <SwiperSlide>
      <a href={partner.link} target="_blank" rel="noreferrer">
        <img src={partner.logo} alt={partner.name} class="" />
      </a>
    </SwiperSlide>
  {/each}
</Swiper>
