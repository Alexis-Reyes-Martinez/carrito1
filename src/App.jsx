import { useState } from 'react'
import { ProductList } from './components/ProductList'
import { Header } from './components/Header'

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <>
    <Header />
    <ProductList />
    </>
  )
}

export default App;
