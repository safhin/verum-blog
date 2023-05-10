import React from 'react'

const Flickr = () => {
  return (
    <div className="flickr-photo-section">
        <div className="flickr-logo">
            <img src="/assets/img/flickr.jpg" srcSet="/assets/img/flickr@2x.jpg 2x" alt=""/>
        </div>
        <div className="flickr_gallery owl-carousel owl-theme">
            <div className="item">
                <a href="#"><img className="img-fluid" src="/assets/img/f1.jpg" alt=""/></a>
            </div>
            <div className="item">
                <a href="#"><img className="img-fluid" src="/assets/img/f2.jpg" alt=""/></a>
            </div>
            <div className="item">
                <a href="#"><img className="img-fluid" src="/assets/img/f3.jpg" alt=""/></a>
            </div>
            <div className="item">
                <a href="#"><img className="img-fluid" src="/assets/img/f4.jpg" alt=""/></a>
            </div>
            <div className="item">
                <a href="#"><img className="img-fluid" src="/assets/img/f5.jpg" alt=""/></a>
            </div>
            <div className="item">
                <a href="#"><img className="img-fluid" src="/assets/img/f6.jpg" alt=""/></a>
            </div>
            <div className="item">
                <a href="#"><img className="img-fluid" src="/assets/img/f1.jpg" alt=""/></a>
            </div>
            <div className="item">
                <a href="#"><img className="img-fluid" src="/assets/img/f2.jpg" alt=""/></a>
            </div>
        </div>
    </div>
  )
}

export default Flickr