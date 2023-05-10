import React from 'react'

const Navigation = () => {
  return (
    <nav className="navigation">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ul id="menu" className="menu">
                        <li><a href="index.html">Home</a>
                            <ul className="sub-menu">
                                <li ><a href="index.html">Home Demo 1</a></li>
                                <li ><a href="home2.html">Home Demo 2</a></li>
                                <li ><a href="home3.html">Home Demo 3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Features</a>
                            <ul className="sub-menu">
                                <li ><a href="standard-fullwidth.html">Standard Fullwidth</a></li>
                                <li ><a href="standard-left-sidebar.html">Standard Left Sidebar</a></li>
                                <li ><a href="standard-right-sidebar.html">Standard Right Sidebar</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Post Format</a>
                            <ul className="sub-menu">
                                <li ><a href="format-image-post.html">Image Post</a></li>
                                <li ><a href="format-gallery-post.html">Gallery Post</a></li>
                                <li ><a href="format-gallery-post-alt.html">Gallery Post Alt</a></li>
                                <li ><a href="format-video-post.html">Video Post</a></li>
                                <li ><a href="format-audio-post.html">Audio Post</a></li>
                                <li ><a href="format-quote-post.html">Quote Post</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Post Details</a>
                            <ul className="sub-menu">
                                <li ><a href="blog-single-fullwidth.html">Standard Fullwidth</a></li>
                                <li ><a href="blog-single-left-sidebar.html">With Left Sidebar</a></li>
                                <li ><a href="blog-single-right-sidebar.html">With Right Sidebar</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Pages</a>
                            <ul className="sub-menu">
                                <li ><a href="about.html">About</a></li>
                                <li ><a href="error-404.html">404 Error page</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navigation