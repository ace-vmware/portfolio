import Hero from './components/Hero';
import AboutMe from "./components/AboutMe"
import Work from "./components/Work"
import Contact from './components/Contact';

function App() {

  return (
    <div> {/* HTML */}
      <div> {/* HEAD */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"></link>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link rel="stylesheet" type="text/css" href="./media/NeutraText-Book.otf"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
        <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'></link>
      </div> {/* /HEAD */}
      <div> {/* BODY */}
          <Hero />
          <AboutMe />
          <Work />
          <Contact />
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossOrigin="anonymous"></script>
      </div> {/* /BODY */}
    </div> 
  );
}

export default App;
