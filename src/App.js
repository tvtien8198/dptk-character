import 'swiper/swiper-bundle.min.css'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-fade/effect-fade.scss'
import 'swiper/components/effect-cube/effect-cube.scss'

import './App.scss';

import 'boxicons'

import 'lazysizes';

import Header from './components/header/Header';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
