import NavBar from "./components/navigation";
import Footer from "./components/footer";
import Home from './pages/Home'

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({once: true});

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Home/>
      </main>
      <hr/>
      <Footer/>
    </>
  );
}

export default App;
