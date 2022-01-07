import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.uiReducer.toggleCart);
  const cart = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      (async () => {
        const response = await fetch(
          "https://reactdb-6ad6e-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
        );
        const data = await response.json();
        if (data) {
          for (let y = 0; y < data.items.length; y++) {
            dispatch({ type: "additem", item: data.items[y] });
          }
        }
      })();
    } else {
      (async () => {
        const response = await fetch(
          "https://reactdb-6ad6e-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
          {
            method: "PUT",
            body: JSON.stringify({ items: cart.items }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        return data;
      })();
    }
  }, [cart, dispatch]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
