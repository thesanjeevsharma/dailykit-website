
import Bakeries from './components/Bakeries.js';
import Navbar from './Navbar';
import Footer from './Footer.js';
function App() {
  return (
    <div className="App">
      <Navbar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Bakeries />
      <Footer/>
    </div>
  );
}

export default App;
