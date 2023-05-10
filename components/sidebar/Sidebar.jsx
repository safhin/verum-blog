import React from 'react'

const Sidebar = () => {
  return (
    <div className="col-lg-3 col-md-4">
        <div className="widget">
            <h2 className="widget-title">Categories</h2>
            <ul>
                <li><a href="#">Art</a> 12</li>
                <li><a href="#">Food</a> 8</li>
                <li><a href="#">Lifestyle</a> 10</li>
                <li><a href="#">Movie</a> 6</li>
                <li><a href="#">Music</a> 9</li>
                <li><a href="#">Top</a> 13</li>
                <li><a href="#">Travel</a> 5</li>
            </ul>
        </div>
        <div className="widget">
            <h2 className="widget-title">About</h2>
            <img className="img-fluid mb-3" src="/assets/img/ab-1.jpg" alt=""/>
            <p className="pb-2"><em>She has previously sung about her love for New York, and it looks</em></p>
            <img className="img-fluid" src="/assets/img/signature.jpg" alt=""/>
        </div>
        <div className="widget">
            <h2 className="widget-title">Latest Post</h2>
            <div className="media">
                <a href="#"><img className="mr-3" src="/assets/img/w1.jpg" width="90" alt="Generic placeholder image"/></a>
                <div className="media-body align-self-center">
                    <h6 className="mt-0"><a href="#">Thoughtful living in los Angeles</a></h6>
                    <p className="text-muted">October 10, 2018</p>
                </div>
            </div>
            <div className="media">
                <a href="#"><img className="mr-3" src="/assets/img/w2.jpg" width="90" alt="Generic placeholder image"/></a>
                <div className="media-body align-self-center">
                    <h6 className="mt-0"><a href="#">Plan your next trip with us</a></h6>
                    <p className="text-muted">October 10, 2018</p>
                </div>
            </div>
            <div className="media">
                <a href="#"><img className="mr-3" src="/assets/img/w3.jpg" width="90" alt="Generic placeholder image"/></a>
                <div className="media-body align-self-center">
                    <h6 className="mt-0"><a href="#">Explore the Beauty of North Amazon</a></h6>
                    <p className="text-muted">October 10, 2018</p>
                </div>
            </div>
        </div>
        <div className="widget">
            <h2 className="widget-title mb-0">Subscribe</h2>
            <p className="text-muted">Sign up and receive our newsletters</p>

            <form action="">
                <input type="text" className="form-control mb-3"/>
                <button className="btn btn-default btn-block">Subscribe</button>
            </form>
        </div>
        <div className="widget">
            <h2 className="widget-title">Follow</h2>
            <div className="widget-social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-google-plus"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-youtube"></i></a>
            </div>
        </div>
        <div className="widget">
            <a href="#"><img className="img-fluid" src="/assets/img/ads.jpg" alt=""/></a>
        </div>
    </div>
  )
}

export default Sidebar