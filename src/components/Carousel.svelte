<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import SwiperSlideContent from "./SwiperSlideContent.svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/autoplay";
  import "../styles/global.css";

  // import required modules
  import { Navigation, Autoplay } from "swiper";
</script>

<Swiper
  navigation={true}
  loop={true}
  modules={[Navigation, Autoplay]}
  autoplay={{ delay: 5000 }}
  speed={800}
  class="h-[70vh] cursor-grab hidden md:block"
>
  <SwiperSlide
    class="bg-[url('/src/images/slide1@2x.webp')] p-8 flex items-center bg-center bg-cover"
  >
    <SwiperSlideContent
      title={"Extração de ácidos nucleicos por beads magnéticas"}
      description={"A Linha Sabiá tem as melhores opções para suas necessidades e para variados tipos de amostras."}
      imageSrc={"src/images/sabia.webp"}
      imageAlt={"Logo da Linha Sabiá"}
      btnColor={"bg-amber-500"}
    />
  </SwiperSlide>
  <SwiperSlide
    class="bg-[url('/src/images/slide3@2x.webp')] p-8 flex items-center bg-center bg-cover"
  >
    <SwiperSlideContent
      title={"Agilize sua rotina no dia a dia com a Lise Rápida de amostras"}
      description={"A Linha Maracajá realiza a lise rápida de células, acelerando os processos de preparo de amostra e permitindo com que se chegue mais rápido nas aplicações downstream, como RT-qPCR e LAMP."}
      imageSrc={"src/images/maracaja.webp"}
      imageAlt={"Logo da Linha Maracajá"}
      btnColor={"bg-stone-500"}
    />
  </SwiperSlide>
  <SwiperSlide
    class="bg-[url('/src/images/slide4@2x.webp')] p-8 flex items-center bg-center bg-cover"
  >
    <SwiperSlideContent
      title={"Complemente ou abasteça seu laboratório com nossos plásticos e acessórios"}
      description={"Queremos facilitar em tudo a vida do cientista, por isso fornecemos plásticos, tais como ponteiras, placas e tubos, assim como racks magnéticas personalizadas."}
      imageSrc={"src/images/plasticos.webp"}
      imageAlt={"Imagem de plasticaria de laboratório"}
      btnColor={"bg-emerald-900"}
    />
  </SwiperSlide>
  <SwiperSlide
    class="bg-[url('src/images/slide5@2x.webp')] p-8 flex items-center bg-center bg-cover"
  >
    <SwiperSlideContent
      title={"Conte com nossa equipe para auxiliar seu desenho experimental"}
      description={"Sabemos a dificuldade em adequar novos kits ou protocolos à rotina laboratorial. Nossa equipe formada por doutores, alunos e ex-alunos da UNICAMP e de outras universidades está de prontidão para te ajudar"}
      imageSrc={"src/images/plasticos.webp"}
      imageAlt={"Imagem de plasticaria de laboratório"}
      btnColor={"bg-emerald-900"}
    />
  </SwiperSlide>
</Swiper>
