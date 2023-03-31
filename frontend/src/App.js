
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Allroutes from './Pages/Allroutes';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
     {/* <Allroutes/> */}
     <Footer/>
   
    </div>
  );
}




export default App;
