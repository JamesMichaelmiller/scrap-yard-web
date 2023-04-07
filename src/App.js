import Home from './components/pages/home/home';
import Contact from './components/pages/contact/contact';
import Store from './components/pages/store/store';
import Nav from './components/nav/nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/pages/contact/contact';
function App() {
  return (
  
    

<Router>
<Nav />
  <Routes>
  <Route exact path="/store" element={<Store />} />
  <Route exact path="/contact" element={<Contact />} />
  <Route exact path="/" element={<Home />} />
  </Routes>

</Router>












  )




}

export default App;