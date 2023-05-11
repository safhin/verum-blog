'use client';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { Navigation } from "swiper";
import 'swiper/css';


const Flickr = () => {
    return (
        <div className="flickr-photo-section">
            <div className="flickr-logo">
                <img src="/assets/img/flickr.jpg" srcSet="/assets/img/flickr@2x.jpg 2x" alt=""/>
            </div>
            <div className="flickr_gallery owl-carousel owl-theme">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={6}
                    avigation={true} modules={[Navigation]}
                >
                    
                    <SwiperSlide>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="/assets/img/f1.jpg" alt=""/></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="/assets/img/f2.jpg" alt=""/></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="/assets/img/f3.jpg" alt=""/></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="/assets/img/f4.jpg" alt=""/></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="/assets/img/f5.jpg" alt=""/></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="/assets/img/f6.jpg" alt=""/></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="/assets/img/f1.jpg" alt=""/></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="/assets/img/f1.jpg" alt=""/></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="/assets/img/f2.jpg" alt=""/></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="/assets/img/f3.jpg" alt=""/></a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Flickr