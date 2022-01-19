const addCart = async (item, url, dbAction, user) => {
  const response = await fetch(url, {
    method: dbAction,
    body: JSON.stringify(item),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Error Adding item to Cart");
  }
};

export default addCart;
