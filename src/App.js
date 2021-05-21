import './App.scss';
import NavBar from './Components/NavBar.js'
import ShowCase from './Components/ShowCase.js'
import About from './Components/About.js'
import VideoPlay from './Components/VideoPlay.js'
import Staff from './Components/Staff.js'
import FindUs from './Components/FindUs.js'
import Footer from './Components/Footer.js'

function App() {
  return (
    <>
      <NavBar/>
      <ShowCase />
      <About />
      <Staff />
      <VideoPlay />
      <FindUs />
      <Footer />
    </>
  );
}

export default App;
