'use client';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { Navigation } from "swiper";
import 'swiper/css';

const ImageSlidePost = () => {
  return (
    <div className="row">
        <div className="col-md-12">
            <article className="post post-aside d-flex align-items-center">
                <div className="post-img">
                    <div className="post_gallery owl-carousel owl-theme">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        avigation={true} modules={[Navigation]}
                    >
                        <SwiperSlide>
                            <div className="item">
                                <a href="#"><img className="img-fluid" src="/assets/img/b10.jpg" alt=""/></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <a href="#"><img className="img-fluid" src="/assets/img/b3.jpg" alt=""/></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <a href="#"><img className="img-fluid" src="/assets/img/b2.jpg" alt=""/></a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
                <div className="post-header">
                    <h3><a href="#">Alicia Keys is on the Picturesque Trip of a Lifetime in Egypt</a></h3>
                    <div className="post-meta">
                        <ul className="cat">
                            <li><a href="#">Travel</a></li>
                        </ul>
                        <div className="separation"></div>
                        <div className="post-date"><a href="#">28th June 2018</a></div>
                    </div>
                </div>
            </article>
        </div>
    </div>
  )
}

export default ImageSlidePost