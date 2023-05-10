import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const PostContainer = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-9 col-md-8 side-border">

                <div className="row">
                    <div className="col-md-12">
                        <article className="post sticky">
                            <div className="post-img">
                                <a href="#"><img className="img-fluid" src="/assets/img/b1.jpg" alt=""/></a>
                            </div>
                            <div className="post-header">
                                <h2><a href="#">Alicia Keys is on the Picturesque Trip of a Lifetime in Egypt</a></h2>
                                <div className="post-meta">
                                    <ul className="cat">
                                        <li><a href="#">Lifestyle</a></li>
                                        <li><a href="#">Travel</a></li>
                                    </ul>
                                    <div className="separation"></div>
                                    <div className="post-date"><a href="#">28th June 2018</a></div>
                                </div>
                            </div>
                            <div className="post-blog first-letter-cap">
                                <p>She has previously sung about her love for New York, and it looks like one North African nation is also inspiring poetry...</p>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <article className="post post-aside d-flex align-items-center">
                            <div className="post-img ">
                                <a href="#"><img className="img-fluid" src="/assets/img/b2.jpg" alt=""/></a>
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

                <div className="row">
                    <div className="col-md-12">
                        <article className="post post-aside d-flex align-items-center">
                            <div className="post-img ">
                                <a href="#"><img className="img-fluid" src="/assets/img/b3.jpg" alt=""/></a>
                            </div>
                            <div className="post-header">
                                <h3><a href="#">Haifaa Al Mansour Brings a New Tale Set in Saudi to Venice</a></h3>
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

                {/* <div className="row">
                    <div className="col-md-12">
                        <article className="post post-aside d-flex align-items-center">
                            <div id="justified_gallery_sm" className="post-img popup-gallery">
                                <a title="Title 3" href="/assets/img/slider-4.jpg">
                                    <img alt="" src="/assets/img/slider-4.jpg"/>
                                </a>
                                <a title="Title 2" href="/assets/img/author.jpg">
                                    <img alt="" src="/assets/img/author.jpg"/>
                                </a>
                                <a title="Title 1" href="/assets/img/b2.jpg">
                                    <img alt="" src="/assets/img/b2.jpg"/>
                                </a>

                                <a title="Title 4" href="/assets/img/b4.jpg">
                                    <img alt="" src="/assets/img/b4.jpg"/>
                                </a>
                                <a title="Title 5" href="/assets/img/b5.jpg">
                                    <img alt="" src="/assets/img/b5.jpg"/>
                                </a>
                                <a title="Title 6" href="/assets/img/b6.jpg">
                                    <img alt="" src="/assets/img/b6.jpg"/>
                                </a>
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
                </div> */}

                <div className="row">
                    <div className="col-md-12">
                        <article className="post post-aside d-flex align-items-center">
                            <div className="post-img position-relative">
                                <a href="#"><img className="img-fluid" src="/assets/img/b6.jpg" alt=""/></a>
                                <a href="https://www.youtube.com/watch?v=8SdniW2U0ho" className="play-btn popup-youtube"><i className="fa fa-play"></i></a>
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


                <div className="row">
                    <div className="col-md-12">
                        {/* quote post */}
                        <div className=" pb-0">
                            <article className="post post-quote d-flex align-items-center " style={{ backgroundImage: `url('/assets/img/b9.jpg')` }}>
                                <div className="post-header">
                                    <h3>"Alicia Keys is on the Picturesque Trip of a Lifetime in Egypt"</h3>
                                    <div className="mb-3">- Nathan Astle -</div>
                                    <div className="post-meta">
                                        <ul className="cat">
                                            <li><a href="#">Quote</a></li>
                                        </ul>
                                        <div className="separation"></div>
                                        <div className="post-date"><a href="#">28th June 2018</a></div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* quote post */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <article className="post post-aside d-flex align-items-center">
                            <div className="post-img post-audio">
                                <iframe width="100%" height="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/473475024&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
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

                <div className="row">
                    <div className="col-md-12">
                        <article className="post post-aside d-flex align-items-center">
                            <div className="post-img ">
                                <a href="#"><img className="img-fluid" src="/assets/img/b7.jpg" alt=""/></a>
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

                <div className="row">
                    <div className="col-md-12">
                        <article className="post post-aside d-flex align-items-center">
                            <div className="post-img">
                                <div className="post_gallery owl-carousel owl-theme">
                                    <div className="item">
                                        <a href="#"><img className="img-fluid" src="/assets/img/b10.jpg" alt=""/></a>
                                    </div>
                                    <div className="item">
                                        <a href="#"><img className="img-fluid" src="/assets/img/b3.jpg" alt=""/></a>
                                    </div>
                                    <div className="item">
                                        <a href="#"><img className="img-fluid" src="/assets/img/b2.jpg" alt=""/></a>
                                    </div>
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

                <div className="row">
                    <div className="col-md-12">
                        <article className="post post-aside without-img-post">
                            {/* <!--<div className="post-img ">-->
                                <!--<a href="#"><img className="img-fluid" src="/assets/img/b8.jpg" alt=""/></a>-->
                            <!--</div>--> */}
                            <div className="post-header">
                                <h3><a href="#">Haifaa Al Mansour Brings a New Tale Set in Saudi to Venice</a></h3>
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

                <div className="row">
                    <div className="col-md-12">
                        <article className="post">
                            <div className="post-img ">
                                <a href="#"><img className="img-fluid" src="/assets/img/b6.jpg" alt=""/></a>
                            </div>
                            <div className="post-header">
                                <h3><a href="#">Haifaa Al Mansour Brings a New Tale Set in Saudi to Venice</a></h3>
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

                {/* custom pagination */}
                <div className="row">
                    <div className="col-12">
                        <div className="custom-pagination">
                            <div className="older full-">
                                <a href="#">Older Posts <i className="fa fa-angle-right"></i></a>
                            </div>
                            <div className="newer">
                                <a href="#"> <i className="fa fa-angle-left"></i> Newer Posts</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* custom pagination */}
            </div>

            <Sidebar/>
        </div>
    </div>
  )
}

export default PostContainer