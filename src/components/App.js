import React from 'react';
import NumberOfStudents from './index.js';
import Header from './Header.js';
import Footer from './Footer.js';


const App = props => {
  return (
    <div>
      <Header />
      <NumberOfStudents />
      <Footer />
    </div>

  )
}

export default App;
