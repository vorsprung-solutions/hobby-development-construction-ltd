import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css/bundle";

import Card from "./Card";
import mainSlider from "../../../../data/mainSlider";

const Banner = () => {
  return (
    <section className="main-slider ">
      <Swiper
        slidesPerView={1}
        loop
        navigation
        effect="fade"
        autoplay
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {mainSlider?.map((slider) => (
          <SwiperSlide key={slider.id}>
            <Card slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
