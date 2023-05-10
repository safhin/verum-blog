import React from 'react'
import TopNavigation from '../../../../components/navigation/TopNavigation'
import Navigation from '../../../../components/navigation/Navigation'
import Footer from '../../../../components/footer/Footer'
import SinglePostBg from '../../../../components/post/SinglePostBg'
import Sidebar from '../../../../components/sidebar/Sidebar'
import SinglePostDetails from '../../../../components/post/SinglePostDetails'

const SinglePost = () => {
  return (
    <div className="single-post">
        <TopNavigation/>
        <Navigation/>
        <SinglePostBg/>
        
        <div className="container">
            <div className="row">
                <SinglePostDetails/>
                <Sidebar/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SinglePost