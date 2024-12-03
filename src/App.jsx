import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5010/products");
    setProducts(res.data.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="app-container">
      <h1>Product List</h1>
      <div className="card-grid">
        {products.map((item) => (
          <Card key={item.id} title={item.name} img={item.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
