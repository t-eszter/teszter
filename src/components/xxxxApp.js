import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

import { HelmetProvider } from 'react-helmet-async';
import DataDrivenDesign from './DataDrivenDesign';


class App extends React.Component {
  render() {
    return (
      // <RouterPage />
      <HelmetProvider>
      <div className='font-kumbh'>
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="datadrivendesign" element={<DataDrivenDesign/>} />

          </Routes>
        </Router>
        <Footer />
      </div>
      </HelmetProvider>
      )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
