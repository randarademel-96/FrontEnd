import Hero from "./../Hero"
import Navigation from "./../Navigation"
import Products from "./../Products"
import { useState } from "react";

function HomePage() {
  const name = null

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {

    const foundItem = cart.find((item) => item.product.id === product.id);
    if (foundItem) {//spread operator (...) taking the cart array elements and adding to to new array and set
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      return;
    }
    setCart([...cart, { product: product, quantity: 1 }]);
  }//add new item to the cart array with quantity 1.

  const getCartQuantity = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    return count;

  };

  return (
    <div>
      <Navigation name={name} cartCount={getCartQuantity()} />
      <Hero />
      <Products handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default HomePage;