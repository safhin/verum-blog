import React from 'react'
import TopNavigation from '../../../components/navigation/TopNavigation'
import Navigation from '../../../components/navigation/Navigation'
import Footer from '../../../components/footer/Footer'

const Contact = () => {
  return (
    <>
        <TopNavigation/>
        <Navigation/>
        <div className="single-hero-img">
            <img src="/assets/img/contact-banner.jpg" alt=""/>
        </div>

        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-8">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="contact-heading text-center">
                                <h2>Drop A Line</h2>
                                <div className="subtitle">Blogger</div>
                                <p>The Grammy-winning singer-songwriter touched down in Egypt this week, where she’s been exploring the country’s architectural and archaeological treasures.</p>
                            </div>
                        </div>
                    </div>
                    <form role="form" className="contact-form">
                        <div className="row">
                            <div className=" col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name*" required=""/>
                                </div>
                            </div>
                            <div className=" col-md-6">
                                <div className="form-group ">
                                    <input type="email" className="form-control" placeholder="Email*" required=""/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="controls">
                                <textarea id="message" rows="5" placeholder="Write your message*" className="form-control" required=""></textarea>
                            </div>
                        </div>
                        <div className="text-center mt-md-5">
                            <button type="submit" className="btn btn-black px-4">Submit Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default Contact