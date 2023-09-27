import { Swiper, SwiperSlide } from "swiper/react";

import "./App.css";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const photos = {
  cat1: require("./img/cat1.jpg"),
  cat2: require("./img/cat2.jpg"),
  dog1: require("./img/dog1.jpg"),
  cat3: require("./img/cat3.jpg"),
  dog2: require("./img/dog2.jpg"),
  cat4: require("./img/cat4.jpeg"),
};

function App() {
  return (
    <div className="App">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="slide">
          <img src={photos.cat1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={photos.cat2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={photos.cat3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={photos.cat4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={photos.dog1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={photos.dog2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
