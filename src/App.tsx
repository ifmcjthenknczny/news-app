import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import styles from './App.module.scss'

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <ContentWrapper />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
