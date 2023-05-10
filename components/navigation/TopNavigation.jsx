import React from 'react'

const TopNavigation = () => {
  return (
    <header className="app-header">
        <div className="container">
            <div className="row">
                <div className="col-12 ">
                    <div className="social-links ">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                    </div>
                    <div className="logo">
                        <h1>
                            <a href="index.html">
                                <img src="/assets/img/logo.png" srcSet="/assets/img/logo@2x.png 2x"  alt=""/>
                            </a>
                        </h1>
                    </div>
                    <div className="search-row">
                        <div className="search_toggle">
                            <img src="/assets/img/search-icon.png" srcSet="/assets/img/search-icon@2x.png 2x" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default TopNavigation