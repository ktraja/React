const addCart = async (cartObj) => {
  const cartUrl =
    "https://reactdb-6ad6e-default-rtdb.asia-southeast1.firebasedatabase.app/ecomcart/" +
    cartObj.user +
    ".json";
  const response = await fetch(cartUrl, {
    method: "PUT",
    body: JSON.stringify(cartObj.item),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error.message || "Error Adding item to Cart");
  }
};

export default addCart;
