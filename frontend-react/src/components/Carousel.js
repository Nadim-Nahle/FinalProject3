import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

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
`

const Carousel = () => {
    return (
        <Container><Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper></Container>
    )
}

export default Carousel