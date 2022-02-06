const getCart = async (user) => {
  const userResp = await fetch(
    "https://reactdb-6ad6e-default-rtdb.asia-southeast1.firebasedatabase.app/ecomcart/" +
      user +
      ".json",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const userCart = await userResp.json();
  return userCart;
};

export default getCart;
