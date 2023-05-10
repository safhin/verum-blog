import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-section">
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-4">
                    <div className="logo text-center">
                        <h1>
                            <a href="#">
                                <img src="/assets/img/logo.png" srcSet="/assets/img/logo@2x.png 2x"  alt=""/>
                            </a>
                        </h1>
                    </div>
                </div>

                <div className="col-md-4">
                    <ul className="list-unstyled footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">All Post</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="col-md-4 order-md-first">
                    © Verum 2023  |  All right Reserved
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer