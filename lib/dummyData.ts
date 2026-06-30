export const brands = [
  "Lamy", "Pilot", "Parker", "Sailor", "Kaweco", "Montblanc", "Sheaffer",
  "Cross", "Waterman", "TWSBI", "Pelikan", "Aurora",
  "Faber-Castell", "Montegrappa", 
];

export const categories = [
  { title: "Fountain Pens", img: "https://makoba.com/cdn/shop/files/FP_180x.png?v=1701437938" },
  { title: "Ball Pens", img: "https://makoba.com/cdn/shop/files/BP_c5703086-ce19-434c-a96f-c613b90e3e25_180x.png?v=1701437938" },
  { title: "Rollerball Pens", img: "https://makoba.com/cdn/shop/files/RB_180x.png?v=1701437940" },
  { title: "Mechanical Pencils", img: "https://makoba.com/cdn/shop/files/MECHANICAL_PENCIL_180x.png?v=1701437939" },
  { title: "Notebooks", img: "https://makoba.com/cdn/shop/files/Notebooks_180x.png?v=1701438443" },
  { title: "Ink Bottle", img: "https://makoba.com/cdn/shop/files/INKS_2ae662a7-455d-42ba-a08e-64fb911bcf2b_180x.png?v=1701438588" },
];

// export const products = Array.from({ length: 10 }).map((_, i) => ({
//   id: i,
//   brand: "Pilot",
//   title: `Sample Fountain Pen ${i + 1}`,
//   price: 5000 + i * 500,
//   salePrice: i % 2 === 0 ? 4500 + i * 400 : null,
//   outOfStock: i % 5 === 0,
//   img: "/placeholder.jpg",
// }));

export const newArrivals = [
  {
    id: 0,
    brand: "Pelikan",
    title: "Pelikan M101N Fountain Pen Grey Blue",
    price: 18500,
    salePrice: null,
    outOfStock: false,
    img: "https://makoba.com/cdn/shop/files/PelikanM101NFountainPenwithInkBottle-GreyBlueCT_SpecialEdition__image1_1800x1800.jpg?v=1781781345"
  },
  {
    id: 1,
    brand: "Visconti",
    title: "Visconti Van Gogh The Prisoners Fountain Pen",
    price: 22500,
    salePrice: 19900,
    outOfStock: false,
    img: "https://makoba.com/cdn/shop/files/ViscontiVanGoghFountainPen-ThePrisoners_Round_SpecialEdition__image1_1800x1800.jpg?v=1781789202"
  },
  {
    id: 2,
    brand: "Opus 88",
    title: "Opus 88 Harmony Fountain Pen Red Grey",
    price: 14500,
    salePrice: null,
    outOfStock: false,
    img: "https://makoba.com/cdn/shop/files/Opus88HarmonyFountainPen-RedGreyRGT_image1_1800x1800.jpg?v=1780554471"
  },
  {
    id: 3,
    brand: "TWSBI",
    title: "TWSBI Eco Horse Year Special Edition",
    price: 9800,
    salePrice: 8500,
    outOfStock: false,
    img: "https://makoba.com/cdn/shop/files/TwsbiEcoFountainPen-HorseYear_SpecialEdition__image1_720x.jpg?v=1781948820"
  },
  {
    id: 4,
    brand: "Sailor",
    title: "Sailor Tuzu Forge Gold Limited Edition",
    price: 32000,
    salePrice: null,
    outOfStock: false,
    img: "https://makoba.com/cdn/shop/files/SailorTuzuForgeFountainPen-Gold_LimitedEdition__image1_720x.jpg?v=1780401790"
  },
  {
    id: 5,
    brand: "Monteverde",
    title: "Monteverde Innova Cloud Dancer",
    price: 16800,
    salePrice: 14900,
    outOfStock: false,
    img: "https://makoba.com/cdn/shop/files/MonteverdeInnovaFountainPenwith15mlInkBottle-CloudDancerRGT_LimitedEdition__image1_720x.jpg?v=1780386005"
  },


];

export const stockProducts = [
  {
    id: 101,
    brand: "Rhodiarama",
    title: "Rhodiarama Hard Cover Poppy Notebook A5 Ruled",
    price: 1850,
    salePrice: null,
    outOfStock: false,
    img: "https://makoba.com/cdn/shop/files/Rhodiarama-Hard-Cover-Poppy-Notebook-A5-Ruled-Image-1_720x.jpg?v=1704869786"
  },
  {
    id: 102,
    brand: "Rhodiarama",
    title: "Rhodiarama Hard Cover Chocolate Notebook A5 Ruled",
    price: 1850,
    salePrice: null,
    outOfStock: false,
    img: "https://makoba.com/cdn/shop/files/Rhodiarama-Hard-Cover-Chocolate-Notebook-A5-Ruled-Image-1_1800x1800.jpg?v=1704869806"
  },
  {
    id: 103,
    brand: "Rhodiarama",
    title: "Rhodiarama Hard Cover Black Notebook A5 Ruled",
    price: 1850,
    salePrice: null,
    outOfStock: false,
    img: "https://makoba.com/cdn/shop/files/Rhodiarama-Hard-Cover-Black-Notebook-A5-Ruled-Image-1_1800x1800.jpg?v=1704869826"
  },
  {
    id: 104,
    brand: "Rhodiarama",
    title: "Rhodiarama Hard Cover Beige Notebook A5 Ruled",
    price: 1850,
    salePrice: null,
    outOfStock: false,
    img: "https://makoba.com/cdn/shop/files/Rhodiarama-Hard-Cover-Chocolate-Notebook-A5-Ruled-Image-1_1800x1800.jpg?v=1704869806"
  },
    {
    id: 105,
    brand: "Rhodiarama",
    title: "Rhodiarama Hard Cover Beige Notebook A5 Ruled",
    price: 1850,
    salePrice: null,
    outOfStock: false,
    img: "https://makoba.com/cdn/shop/files/Rhodiarama-Soft-Cover-Burgundy-Notebook-A5-Dotted-Image-1_720x.jpg?v=1704810004"
  },
    {
    id: 106,
    brand: "Rhodiarama",
    title: "Rhodiarama Hard Cover Beige Notebook A5 Ruled",
    price: 1850,
    salePrice: null,
    outOfStock: false,
    img: "https://makoba.com/cdn/shop/files/Rhodiarama-Hard-Cover-Chocolate-Notebook-A5-Ruled-Image-1_720x.jpg?v=1704869806"
  },
  // Add more stock items here...
];
export const reviews = [
  { name: "B.", text: "Smooth packaging, delivered on time, great pen.", product: "Lamy Vista Fountain Pen", rating: 5 },
  { name: "D.D.G.", text: "Love the TWSBI, so beautiful and transparent.", product: "Twsbi Eco Fountain Pen", rating: 5 },
  { name: "S.", text: "Very smooth nib, excellent service.", product: "Pilot Custom 823", rating: 5 },
];



// Add this export to your existing dummy data file (e.g. dummy-data.ts)
// alongside brands, categories, newArrivals, stockProducts, reviews, etc.

export const featuredItems = [
  {
    name: "Private Reserve Van Gogh Starry Night Limited Edition Ink Bottle, Blue - 90ml",
    price: 3250,
    // TODO: replace with the actual product image URL from Makoba
    // (open the product page → right-click the main image → "Copy image address")
    img: "https://cdn.shopify.com/s/files/1/0582/0819/0643/files/PrivateReserveVanGoghStarryNightLimitedEditionInkBottle_Blue-90ml_image1_91326f77-4fbc-41de-83f1-98dbc90e19f3_400x400.jpg?v=1776840187",
  },
  {
    name: "Pilot Iroshizuku Ink Bottle, Kon Peki (Blue) - 50ml",
    price: 1500,
    img: "https://cdn.shopify.com/s/files/1/0582/0819/0643/files/Pilot-Iroshizuku-Ink-Bottle-Kon-Peki-_Deep-Blue_-50ml_400x400.jpg?v=1716377606",
  },
  {
    name: "Pelikan Edelstein Pyrite Ink Bottle, Gold - 50ml",
    price: 3300,
    img: "https://cdn.shopify.com/s/files/1/0582/0819/0643/files/PelikanEdelsteinPyriteInkBottle_Gold-50ml_image1_400x400.jpg?v=1776859325",
  },
  {
    name: "Pilot Iroshizuku Ink Bottle, Asa Gao (Navy Blue) - 50ml",
    price: 1500,
    img: "https://cdn.shopify.com/s/files/1/0582/0819/0643/files/Pilot-Iroshizuku-Ink-Bottle-Yama-Budo-_Burgundy_-50ml_400x400.jpg?v=1716377916",
  },
    {
    name: "Pilot Iroshizuku Ink Bottle, Asa Gao (Navy Blue) - 50ml",
    price: 1500,
    img: "https://cdn.shopify.com/s/files/1/0582/0819/0643/files/Pilot-Iroshizuku-Ink-Bottle-Take-Sumi-_Black_-50ml_400x400.jpg?v=1716377815",
  },
    {
    name: "Pilot Iroshizuku Ink Bottle, Asa Gao (Navy Blue) - 50ml",
    price: 1500,
    img: "https://cdn.shopify.com/s/files/1/0582/0819/0643/files/TomeoRiverSRSA5MMWBeigeNotebook-A5-Plain_image1_400x400.jpg?v=1775570936",
  },
    {
    name: "Pilot Iroshizuku Ink Bottle, Asa Gao (Navy Blue) - 50ml",
    price: 1500,
    img: "https://cdn.shopify.com/s/files/1/0582/0819/0643/files/PilotMRAnimalFountainPenwithCon40Converter-BlackCrocodileCT_image1_f1996a5f-aa7b-4797-b969-d8dcfebdb152_400x400.jpg?v=1756458474",
  },
];