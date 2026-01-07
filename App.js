import { AboutUs, FindUs, Footer, Gallery, Header, Intro, FeaturedModels } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
    <FeaturedModels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;