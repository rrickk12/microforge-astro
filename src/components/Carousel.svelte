<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/autoplay";
  import "../styles/Carousel.css";
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
  class="mySwiper"
>
  <SwiperSlide style="background-image: url('src/images/slide1@2x.webp')">
    <div class="grid-2">
      <div>
        <h2>Extração de ácidos nucleicos por beads magnéticas</h2>
        <p>
          A Linha Sabiá tem as melhores opções para suas necessidades e para
          variados tipos de amostras.
        </p>
        <button style="background-color: var(--orange)">saiba mais</button>
      </div>
      <img style="width:80%" src="src/images/sabia.webp" alt="" />
    </div>
  </SwiperSlide>
  <SwiperSlide style="background-image: url('src/images/slide3@2x.webp')">
    <div class="grid-2">
      <div>
        <h2>Agilize sua rotina no dia a dia com a Lise Rápida de amostras</h2>
        <p>
          A Linha Maracajá realiza a lise rápida de células, acelerando os
          processos de preparo de amostra e permitindo com que se chegue mais
          rápido nas aplicações downstream, como RT-qPCR e LAMP
        </p>
        <button style="background-color: var(--brown)">saiba mais</button>
      </div>
      <img style="width:100%" src="src/images/maracaja.webp" alt="" />
    </div>
  </SwiperSlide>
  <SwiperSlide style="background-image: url('src/images/slide4@2x.webp')">
    <div class="grid-2">
      <div>
        <h2>
          Complemente ou abasteça seu laboratório com nossos plásticos e
          acessórios
        </h2>
        <p>
          Queremos facilitar em tudo a vida do cientista, por isso fornecemos
          plásticos, tais como ponteiras, placas e tubos, assim como racks
          magnéticas personalizadas
        </p>
        <button style="background-color: var(--medium-green)">saiba mais</button
        >
      </div>
      <img style="width:100%" src="src/images/plasticos.webp" alt="" />
    </div>
  </SwiperSlide>
  <SwiperSlide style="background-image: url('src/images/slide5@2x.webp')">
    <div class="grid-2">
      <div>
        <h2>Conte com nossa equipe para auxiliar seu desenho experimental</h2>
        <p>
          Sabemos a dificuldade em adequar novos kits ou protocolos à rotina
          laboratorial. Nossa equipe formada por doutores, alunos e ex-alunos da
          UNICAMP e de outras universidades está de prontidão para te ajudar
        </p>
        <button style="background-color: var(--light-green)">saiba mais</button>
      </div>
      <img style="width:100%" src="src/images/plasticos.webp" alt="" />
    </div>
  </SwiperSlide>
</Swiper>

<style>
  .grid-2 {
    display: grid;
    grid-template-columns: 60% 40%;
    justify-items: center;
    height: 40%;
    width: 50%;
    padding: 3rem 1rem 8rem 2rem;
    background-color: #ffffffb5;
    border-radius: 20px;

    margin: 10% 30% 10% 10%;
  }

  h2 {
    color: #314c4c;
  }

  p {
    color: #494949;
  }

  button {
    font-weight: 700;
    font-size: 14px;
    text-shadow: 1px 1px 1px RGBA(0, 0, 0, 0.17);
    padding: 12px;
    border-radius: 20px;
    border: none;
    color: #fff;
  }

  button:hover {
    cursor: pointer;
    opacity: 90%;
  }
</style>
