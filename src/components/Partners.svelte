<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import finepImg from "../images/partners/finep.png";
  import bioventImg from "../images/partners/biovent.webp";
  import ecomolImg from "../images/partners/ecomol.webp";
  import inovaImg from "../images/partners/inova.png";
  import unespImg from "../images/partners/unesp.webp";
  import lgeImg from "../images/partners/lge.webp";

  const partners = [
    {
      name: "Finep",
      logo: finepImg,
      link: "http://www.finep.gov.br/",
    },
    {
      name: "Biovent",
      logo: bioventImg,
      link: "https://biovent.com.br/",
    },
    {
      name: "Inova",
      logo: inovaImg,
      link: "https://www.inova.unicamp.br/",
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
        <img src={partner.logo.src} alt={partner.name} class="" />
      </a>
    </SwiperSlide>
  {/each}
</Swiper>
