import React from 'react';
import { Cart } from './components/Cart/Cart';
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { SneakersSevice } from './services/SneakersSevice';

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartVisibility, setCartVisibility] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      setProducts(await SneakersSevice.getAllProducts());
    }

    fetchData();
    
  }, []);

  const onClickCart = () => {
    setCartVisibility(!cartVisibility);
    
    if(!cartVisibility) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }

  return (
    <div className="wrapper">
      <Cart visibility={cartVisibility} onClickCart={onClickCart}/>
      <Header onClickCart={onClickCart}/>
      <Content products={products}/>
    </div>
  );
}

export default App;
