import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import ZuerichAdresse from './components/ZuerichAdresse';
import DataDrivenDesign from './components/DataDrivenDesign';
import Besity from './components/Besity';
import About from './components/About';


class App extends React.Component {
  render() {
    return (
      // <RouterPage />
      <HelmetProvider>
      <div className='font-kumbh bg-vivanautica-50'>
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zuerichadresse" element={<ZuerichAdresse />} />
            <Route path="/data_driven_design" element={<DataDrivenDesign />} />
            <Route path="/besity" element={<Besity />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </Router>
        <Footer />
      </div>
      </HelmetProvider>
      )
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
