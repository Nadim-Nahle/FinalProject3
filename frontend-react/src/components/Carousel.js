import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/Nfts/1.svg'
import img2 from '../assets/Nfts/2.svg'
import img3 from '../assets/Nfts/3.svg'
import img4 from '../assets/Nfts/4.svg'
import img5 from '../assets/Nfts/5.svg'
import img6 from '../assets/Nfts/6.svg'
import img7 from '../assets/Nfts/7.svg'
import img8 from '../assets/Nfts/8.svg'
import img9 from '../assets/Nfts/9.svg'
import img10 from '../assets/Nfts/10.svg'
import img11 from '../assets/Nfts/11.svg'
import img12 from '../assets/Nfts/12.svg'
import img13 from '../assets/Nfts/13.svg'

const Container = styled.div`
width: 25vw;
height: 70vh;


.swiper{
    width:100%;
    height: 70vh;
}

.swiper-slide{
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;
    align-items: center;
}
`

const Carousel = () => {
    return (
        <Container><Swiper
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
            pagination={{
                type: 'fraction',
            }}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide><img src={img1} alt="Footballers" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="Footballers" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="Footballers" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="Footballers" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="Footballers" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="Footballers" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="Footballers" /></SwiperSlide>
            <SwiperSlide><img src={img8} alt="Footballers" /></SwiperSlide>
            <SwiperSlide><img src={img9} alt="Footballers" /></SwiperSlide>
            <SwiperSlide><img src={img10} alt="Footballers" /></SwiperSlide>
            <SwiperSlide><img src={img11} alt="Footballers" /></SwiperSlide>
            <SwiperSlide><img src={img12} alt="Footballers" /></SwiperSlide>
            <SwiperSlide><img src={img13} alt="Footballers" /></SwiperSlide>
        </Swiper></Container>
    )
}

export default Carousel