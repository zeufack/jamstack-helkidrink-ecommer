import uuid from 'uuid/v4'

let inventory = [
  {
    categories: ["boissons sans alcool"],
    name: "Coca-Cola Zéro 1,5L",
    pro_price: "0.96",
    autre_price: "1.20",
    image: "../images/products/coca-cola-zero-1500ml_295x.png",
    description:
      "livraison en gros uniquement (5 palettes minimum) , à raisons de 95 cents la bouteille (456 bouteilles par palette ) Au alentour de Lille jusqu’à 200km de Lille (50€ frais de livraisons) Plus de 5 palettes 90 cents la livraison. NB: pas de black, uniquement aux commerçants qui ont leur numéro de TVA intercommunautaire. Pour toutes commandes, nous vous demandons le paiement des frais de transports avant tout déplacement ! Vous pouvez payer via notre site Par PayPal Merci ! Pour toute autre suggestion, veuillez nous contacter au 0033668285219 / 0032487982351",
    brand: "coca cola",
    currentInventory: 4,
  },
  {
    categories: ["boissons sans alcool"],
    name: "Fanta 1,5L",
    pro_price: "0.96",
    autre_price: "1.20",
    image: "../images/products/753_295x-removebg-preview.png",
    description:
      "livraison en gros uniquement (5 palettes minimum) , à raisons de 95 cents la bouteille (456 bouteilles par palette ) Au alentour de Lille jusqu’à 200km de Lille (50€ frais de livraisons) Plus de 5 palettes 90 cents la livraison. NB: pas de black, uniquement aux commerçants qui ont leur numéro de TVA intercommunautaire. Pour toutes commandes, nous vous demandons le paiement des frais de transports avant tout déplacement ! Vous pouvez payer via notre site Par PayPal Merci ! Pour toute autre suggestion, veuillez nous contacter au 0033668285219 / 0032487982351.",
    brand: "Fanta",
    currentInventory: 2,
  },
  {
    categories: ["boissons sans alcool"],
    name: "Sprite 1.5L",
    pro_price: "0.96",
    autre_price: "1.20",
    image:
      "../images/products/sprite-1-25l-pack-de-6-1348385023_ML_295x-removebg-preview.png",
    description:
      "livraison en gros uniquement (5 palettes minimum) , à raisons de 95 cents la bouteille (456 bouteilles par palette ) Au alentour de Lille jusqu’à 200km de Lille (50€ frais de livraisons) Plus de 5 palettes 90 cents la livraison. NB: pas de black, uniquement aux commerçants qui ont leur numéro de TVA intercommunautaire. Pour toutes commandes, nous vous demandons le paiement des frais de transports avant tout déplacement ! Vous pouvez payer via notre site Par PayPal Merci ! Pour toute autre suggestion, veuillez nous contacter au 0033668285219 / 0032487982351",
    brand: "Sprite",
    currentInventory: 8,
  },
  {
    categories: ["boissons sans alcool"],
    name: "Coca-Cola 1,5L",
    pro_price: "0.96",
    autre_price: "1.20",
    image:
      "../images/products/coca-cola-15-litres-bouteille-plastique-removebg-preview.png",
    description:
      "livraison en gros uniquement (5 palettes minimum) , à raisons de 95 cents la bouteille (456 bouteilles par palette ) Au alentour de Lille jusqu’à 200km de Lille (50€ frais de livraisons) Plus de 5 palettes 90 cents la livraison. NB: pas de black, uniquement aux commerçants qui ont leur numéro de TVA intercommunautaire. Pour toutes commandes, nous vous demandons le paiement des frais de transports avant tout déplacement ! Vous pouvez payer via notre site Par PayPal Merci ! Pour toute autre suggestion, veuillez nous contacter au 0033668285219 / 0032487982351",
    brand: "coca cola",
    currentInventory: 10,
  },
  {
    categories: ["Canettes", "boissons sans alcool"],
    name: "Coca Cola Zero 33cL,",
    pro_price: "0.35",
    autre_price: "0.39",
    image:
      "../images/products/24-canettes-33cl-coca-cola-zero-003770400-product_zoom-removebg-preview.png",
    description:
      "livraison en gros uniquement (5 palettes minimum) , à raisons de 95 cents la bouteille (456 bouteilles par palette ) Au alentour de Lille jusqu’à 200km de Lille (50€ frais de livraisons) Plus de 5 palettes 90 cents la livraison. NB: pas de black, uniquement aux commerçants qui ont leur numéro de TVA intercommunautaire. Pour toutes commandes, nous vous demandons le paiement des frais de transports avant tout déplacement ! Vous pouvez payer via notre site Par PayPal Merci ! Pour toute autre suggestion, veuillez nous contacter au 0033668285219 / 0032487982351",
    brand: "coca cola",
    currentInventory: 7,
  },
  {
    categories: ["Canettes", "boissons sans alcool"],
    name: "Sprite 33cL,",
    pro_price: "0.35",
    autre_price: "0.39",
    image:
      "../images/products/181015-111021-canette-sprite-33cl-removebg-preview_1_295x-removebg-preview.png",
    description:
      "livraison en gros uniquement (5 palettes minimum) , à raisons de 95 cents la bouteille (456 bouteilles par palette ) Au alentour de Lille jusqu’à 200km de Lille (50€ frais de livraisons) Plus de 5 palettes 90 cents la livraison. NB: pas de black, uniquement aux commerçants qui ont leur numéro de TVA intercommunautaire. Pour toutes commandes, nous vous demandons le paiement des frais de transports avant tout déplacement ! Vous pouvez payer via notre site Par PayPal Merci ! Pour toute autre suggestion, veuillez nous contacter au 0033668285219 / 0032487982351",
    brand: "Jason Bourne",
    currentInventory: 13,
  },
  {
    categories: ["Canettes", "boissons sans alcool"],
    name: "Fanta Orange 33cL",
    pro_price: "0.35",
    autre_price: "0.39",
    image: "../images/products/100_295x-removebg-preview.png",
    description:
      "livraison en gros uniquement (5 palettes minimum) , à raisons de 95 cents la bouteille (456 bouteilles par palette ) Au alentour de Lille jusqu’à 200km de Lille (50€ frais de livraisons) Plus de 5 palettes 90 cents la livraison. NB: pas de black, uniquement aux commerçants qui ont leur numéro de TVA intercommunautaire. Pour toutes commandes, nous vous demandons le paiement des frais de transports avant tout déplacement ! Vous pouvez payer via notre site Par PayPal Merci ! Pour toute autre suggestion, veuillez nous contacter au 0033668285219 / 0032487982351",
    brand: "Jason Bourne",
    currentInventory: 9,
  },
  {
    categories: ["Canettes", "boissons sans alcool"],
    name: "Fanta Kiwi Fraise 33cL",
    pro_price: "0.35",
    autre_price: "0.39",
    image: "../images/products/sdgdeh_295x-removebg-preview.png",
    description:
      "livraison en gros uniquement (5 palettes minimum) , à raisons de 95 cents la bouteille (456 bouteilles par palette ) Au alentour de Lille jusqu’à 200km de Lille (50€ frais de livraisons) Plus de 5 palettes 90 cents la livraison. NB: pas de black, uniquement aux commerçants qui ont leur numéro de TVA intercommunautaire. Pour toutes commandes, nous vous demandons le paiement des frais de transports avant tout déplacement ! Vous pouvez payer via notre site Par PayPal Merci ! Pour toute autre suggestion, veuillez nous contacter au 0033668285219 / 0032487982351",
    brand: "Jason Bourne",
    currentInventory: 24,
  },

  {
    categories: ["Canettes", "boissons sans alcool"],
    name: "Coca-Cola 33cL",
    pro_price: "0.35",
    autre_price: "0.39",
    image:
      "../images/products/mini-refrigerateur-en-forme-de-canette-coca-cola-removebg-preview.png",
    description:
      "livraison en gros uniquement (5 palettes minimum) , à raisons de 95 cents la bouteille (456 bouteilles par palette ) Au alentour de Lille jusqu’à 200km de Lille (50€ frais de livraisons) Plus de 5 palettes 90 cents la livraison. NB: pas de black, uniquement aux commerçants qui ont leur numéro de TVA intercommunautaire. Pour toutes commandes, nous vous demandons le paiement des frais de transports avant tout déplacement ! Vous pouvez payer via notre site Par PayPal Merci ! Pour toute autre suggestion, veuillez nous contacter au 0033668285219 / 0032487982351",
    brand: "Jason Bourne",
    currentInventory: 43,
  },
  {
    categories: ["autre"],
    name: "Huile de Tournesol",
    pro_price: "0.86",
    autre_price: "0.86",
    image: "../images/products/tournesol-removebg-preview.png",
    description:
      "You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.",
    brand: "Jason Bourne",
    currentInventory: 2,
  },
  {
    categories: ["autre"],
    name: "Nutella",
    pro_price: "2.90",
    autre_price: "2.90",
    image: "../images/products/nutella-removebg-preview.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    currentInventory: 14,
  },

  {
    categories: ["autre"],
    name: "CMasques 3 plis standard",
    pro_price: "0.15",
    autre_price: "0.15",
    image:
      "../images/products/f87836e4-c05b-4715-8a89-b71567ce0d0a_1.e7059a07c61037e1302ba6c4ce22404c-removebg-preview.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 12,
  },
  {
    categories: ["autre"],
    name: "Charlotte Blanche usage unique 45 cm",
    pro_price: "0.03",
    autre_price: "0.03",
    image: "../images/products/charlote-removebg-preview.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 13,
  },
  {
    categories: ["autre"],
    name: "Thermomètre sans contact",
    pro_price: "22",
    autre_price: "22",
    image: "../images/products/841x1200-removebg-preview.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 33,
  },
  {
    categories: ["autre"],
    name: "Sur Chaussures usage unique",
    pro_price: "0.045",
    autre_price: "0.045",
    image: "../images/products/chaussure-removebg-preview.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 23,
  },
  // {
  //   categories: ["on sale", "chairs"],
  //   name: "Denim on Denim Single",
  //   price: "1100",
  //   image: "../images/products/chair5.png",
  //   description:
  //     "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
  //   brand: "Jason Bourne",
  //   currentInventory: 13,
  // },
  // {
  //   categories: ["on sale", "chairs"],
  //   name: "Levo Tan Lounge Chair",
  //   price: "600",
  //   image: "../images/products/chair6.png",
  //   description:
  //     "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
  //   brand: "Jason Bourne",
  //   currentInventory: 15,
  // },

  // {
  //   categories: ["on sale", "chairs"],
  //   name: "Anime Tint Recliner",
  //   price: "775",
  //   image: "../images/products/chair7.png",
  //   description:
  //     "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
  //   brand: "Jason Bourne",
  //   currentInventory: 44,
  // },
  // {
  //   categories: ["on sale", "chairs"],
  //   name: "Josh Jones Red Chair",
  //   price: "1200",
  //   image: "../images/products/chair8.png",
  //   description:
  //     "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
  //   brand: "Jason Bourne",
  //   currentInventory: 17,
  // },
  // {
  //   categories: ["on sale", "chairs"],
  //   name: "Black Sand Lounge",
  //   price: "1600",
  //   image: "../images/products/chair9.png",
  //   description:
  //     "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
  //   brand: "Jason Bourne",
  //   currentInventory: 28,
  // },
  // {
  //   categories: ["on sale", "chairs"],
  //   name: "Mint Beige Workchair",
  //   price: "550",
  //   image: "../images/products/chair10.png",
  //   description:
  //     "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
  //   brand: "Jason Bourne",
  //   currentInventory: 31,
  // }, // {
]




inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory


