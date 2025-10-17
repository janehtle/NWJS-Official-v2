import VideoBackground from "../components/home/VideoBackground"
import Logo from "../components/home/Logo"
import "./Home.css"
import MusicPlayer from '../components/home/MusicPlayer'

function Home() {
  return (
    <div className="home-page">
      <VideoBackground />
      <MusicPlayer /> 
      <Logo />
    </div>
  )
}

export default Home
