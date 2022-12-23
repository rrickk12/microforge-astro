<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/autoplay";

  // import required modules
  import { Navigation, Autoplay } from "swiper";
</script>

<div class="flex justify-center">
  <h2>Produtos em destaque</h2>
  <Swiper
    navigation={true}
    loop={true}
    modules={[Navigation, Autoplay]}
    autoplay={{ delay: 5000 }}
    speed={800}
  >
    <SwiperSlide>
      <h2>Linha Sabiá</h2>
      <p>
        A Linha Sabiá tem as melhores opções para suas necessidades e para
        variados tipos de amostras.
      </p>
    </SwiperSlide>
  </Swiper>
</div>
