import TopNavigation from '../../components/navigation/TopNavigation'
import Navigation from '../../components/navigation/Navigation'
import HeroSlider from '../../components/sidebar/HeroSlider'
import PostContainer from '../../components/post/PostContainer'
import Flickr from '../../components/flickr/Flickr'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <>
      <TopNavigation/>
      <Navigation/>
      <HeroSlider/>
      <PostContainer/>
      <Flickr/>
      <Footer/>
    </>
  )
}
