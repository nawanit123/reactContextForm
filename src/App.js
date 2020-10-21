import React, { Component } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import PageContent from './PageContent';
import Navbar from './Navbar';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default App;
