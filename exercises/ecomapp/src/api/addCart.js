const addCart = async (item, usrUrl) => {
  const response = await fetch(
    "https://reactdb-6ad6e-default-rtdb.asia-southeast1.firebasedatabase.app/ecomcart/" +
      usrUrl +
      ".json",
    {
      method: "PUT",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Error Adding item to Cart");
  }
};

export default addCart;
