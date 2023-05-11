'use client';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const HeroSlider = () => {
  return (
    <>
    <div className="custom-slider">
        <div className="js_number_carousel owl-carousel">
            <Swiper
                pagination={{type: "fraction"}}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/img/slider-3.jpg" alt="img3" />
                        <div className="slider-post">
                            <article className="post">
                                <div className="post-header">
                                    <h2><a href="#">Haifaa Al Mansour Brings a New Tale Set in Saudi to Venice</a></h2>
                                    <div className="post-meta">
                                        <ul className="cat">
                                            <li><a href="#">Movie</a></li>
                                        </ul>
                                        <div className="separation"></div>
                                        <div className="post-date"><a href="#">28th June 2018</a></div>
                                    </div>
                                </div>
                                <div className="post-blog">
                                    <p>She has previously sung about her love for New York, and it looks like one North African nation is also inspiring poetry in Alicia Keys...</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/img/slider-2.jpg" alt="img2" />
                        <div className="slider-post">
                            <article className="post">
                                <div className="post-header">
                                    <h2><a href="#">Alicia Keys is on the Picturesque Trip of a Lifetime in Egypt</a></h2>
                                    <div className="post-meta">
                                        <ul className="cat">
                                            <li><a href="#">Movie</a></li>
                                        </ul>
                                        <div className="separation"></div>
                                        <div className="post-date"><a href="#">28th June 2018</a></div>
                                    </div>
                                </div>
                                <div className="post-blog">
                                    <p>She has previously sung about her love for New York, and it looks like one North African nation is also inspiring poetry in Alicia Keys...</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/img/slider-4.jpg" alt="img4" />
                        <div className="slider-post">
                            <article className="post">
                                <div className="post-header">
                                    <h2><a href="#">What To Expect From the Spring 2019 Shows At Milan Fashion Week</a></h2>
                                    <div className="post-meta">
                                        <ul className="cat">
                                            <li><a href="#">Movie</a></li>
                                        </ul>
                                        <div className="separation"></div>
                                        <div className="post-date"><a href="#">28th June 2018</a></div>
                                    </div>
                                </div>
                                <div className="post-blog">
                                    <p>She has previously sung about her love for New York, and it looks like one North African nation is also inspiring poetry in Alicia Keys...</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/img/slider-1.jpg" alt="img1" />
                        <div className="slider-post">
                            <article className="post">
                                <div className="post-header">
                                    <h2><a href="#">Picturesque Trip of a Lifetime in Egypt</a></h2>
                                    <div className="post-meta">
                                        <ul className="cat">
                                            <li><a href="#">Movie</a></li>
                                        </ul>
                                        <div className="separation"></div>
                                        <div className="post-date"><a href="#">28th June 2018</a></div>
                                    </div>
                                </div>
                                <div className="post-blog">
                                    <p>She has previously sung about her love for New York, and it looks like one North African nation is also inspiring poetry in Alicia Keys...</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>    
        </div>
    </div>
    </>
  )
}

export default HeroSlider