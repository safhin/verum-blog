import React from 'react'

const VideoPost = () => {
  return (
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
  )
}

export default VideoPost