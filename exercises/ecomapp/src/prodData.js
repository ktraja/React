export const TEMP_PROD = [
  {
    id: 1,
    brand: "Mordern",
    price: 45,
    prod: "Mordern Bread - Sandwich",
    cat: "Bakery",
    img: "./bread.jpeg",
  },
  {
    id: 2,
    brand: "Mordern",
    price: 50,
    prod: "Mordern Bread - Whole Wheat",
    cat: "Bakery",
    img: "./bread.jpeg",
  },
  {
    id: 3,
    brand: "Colgate",
    price: 63,
    prod: "Colgate Toothpaste - 100g",
    cat: "Personal Hygiene",
    img: "./colgate100g.jpeg",
  },
  {
    id: 4,
    brand: "Colgate",
    price: 107,
    prod: "Colgate Toothpaste - 200g",
    cat: "Personal Hygiene",
    img: "./colgate200g.jpeg",
  },
  {
    id: 5,
    brand: "Udhayam",
    price: 75,
    prod: "Toor Dal - 1kg",
    cat: "Provisions",
    img: "./udhyamtoor.jpeg",
  },
  {
    id: 6,
    brand: "Udhayam",
    price: 90,
    prod: "Urid Dal - 1kg",
    cat: "Provisions",
    img: "./udhyamurid.jpeg",
  },
  {
    id: 7,
    brand: "Sivaji",
    price: 1435,
    prod: "Rice - 25kg Bag",
    cat: "Provisions",
    img: "./sivajirice.jpeg",
  },
  {
    id: 8,
    brand: "Classmate",
    price: 35,
    prod: "Classmate Notebook",
    cat: "Stationery",
    img: "./classmatenote.jpeg",
  },
  {
    id: 9,
    brand: "Reynolds",
    price: 15,
    prod: "Ink Pen",
    cat: "Stationery",
    img: "./inkpen.jpeg",
  },
  {
    id: 10,
    brand: "Fresho",
    price: 35,
    prod: "Tomato - 1kg",
    cat: "Vegetables",
    img: "./tomato.jpeg",
  },
  {
    id: 11,
    brand: "Fresho",
    price: 60,
    prod: "Beans - 1kg",
    cat: "Vegetables",
    img: "./beans.jpeg",
  },
  {
    id: 12,
    brand: "Fresho",
    price: 20,
    prod: "Potato - 1kg",
    cat: "Vegetables",
    img: "./potato.jpeg",
  },
  {
    id: 13,
    brand: "Fresho",
    price: 48,
    prod: "Cabbage - 1kg",
    cat: "Vegetables",
    img: "./cabbage.jpeg",
  },
  {
    id: 14,
    brand: "Fresho",
    price: 46,
    prod: "Onion - 1kg",
    cat: "Vegetables",
    img: "./onion.jpeg",
  },
  {
    id: 15,
    brand: "Fresho",
    price: 54,
    prod: "Carrot - 1kg",
    cat: "Vegetables",
    img: "./carrot.jpeg",
  },
];

export const TEMP_CATEGORY = [
  ...new Set(
    TEMP_PROD.map((prod) => {
      return prod.cat;
    })
  ),
];
