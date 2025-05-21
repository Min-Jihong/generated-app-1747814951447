import React from 'react';
import './App.css';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Online Store</h1>
      </header>
      <main>
        <ProductDetail />
      </main>
    </div>
  );
}

export default App;