enum PriceBracket {
 Low, // $0 - $10
 Medium, // $10 - $20
 High, // $20 - $30
}
const restaurants = [
  {
    name: "Silver Rice Sushi 🍣",
    priceBracket: PriceBracket.Medium,
    deliveryTimeMinutes: 40,
    openHour: "12",
    closeHour: "23",
    distance: "5",
  },
  {
    name: "Nikko's Rotisserie Chicken 🍗",
    priceBracket: PriceBracket.Low,
    deliveryTimeMinutes: 20,
    openHour: "12",
    closeHour: "21",
    distance: "8",
  },
  {
    name: "Aita Trattoria 🍝",
    priceBracket: PriceBracket.High,
    deliveryTimeMinutes: 60,
    openHour: "18",
    closeHour: "22",
    distance: "1",
  },
  {
    name: "Lula Bagel 🥯",
    priceBracket: PriceBracket.Low,
    deliveryTimeMinutes: 20,
    openHour: "0",
    closeHour: "12",
    distance: "2",
  },
  {
    name: "Golden Chopstick 🥢",
    priceBracket: PriceBracket.Medium,
    deliveryTimeMinutes: 20,
    openHour: "15",
    closeHour: "23",
    distance: "12",
  },
 ];
 ​
 type Restaurant = typeof restaurants[][0];

 
 export const orders = [
  [
    {
      name: "Miso Ramen",
      price: 15.99,
    },
    {
      name: "Gyoza and Rice",
      price: 7.99,
    },
    {
      name: "Sashimi Lunch Set",
      price: 13.99,
    },
  ],
  [
    {
      name: "Chicken and Waffles",
      price: 9.99,
    },
    {
      name: "Buffalo Wings Special",
      price: 8.99,
    },
    {
      name: "Rottiserie Meal Deal",
      price: 11.99,
    },
  ],
  [
    {
      name: "Rigatoni Bolognese",
      price: 24,
    },
    {
      name: "Insalata Di Parma",
      price: 20,
    },
    {
      name: "Lasagna Al Forno",
      price: 22,
    },
  ],
  [
    {
      name: "Turkey Bacon Bagel",
      price: 6.99,
    },
    {
      name: "Lox Cream Cheese Bagel",
      price: 9.99,
    },
    {
      name: "Pastrami Swiss Bagel",
      price: 7.99,
    },
  ],
  [
    {
      name: "Xiao Long Bao",
      price: 14.99,
    },
    {
      name: "Red Bean Buns",
      price: 12.49,
    },
    {
      name: "Kurobuta Pork Shao Mai",
      price: 14.99,
    },
  ],
 ];
 
 type Order = typeof orders[0][0];
 
 function getMaxPrice(bracket: PriceBracket) :number {
  if (bracket === PriceBracket.Low) {
    return 10.0
  }
  if (bracket === PriceBracket.Medium) {
    return 20.0
  } 
  if (bracket === PriceBracket.High) {
    return 30.0
  }
}
/// Add your getOrders() function below:

function getOrders(price:PriceBracket, orders:Order[][] ) :Order[][] {
  let filteredOrders: Order[][] = [];
  const limit: number = getMaxPrice(price)
orders.forEach(orderArray => { const filteredForRestaurant = orderArray.filter(order => order.price <= limit)
filteredOrders.push(filteredForRestaurant);
});
   return filteredOrders;
}
/// Add your printOrders() function below:
function printOrders(restaurants: Restaurant, orders:Order[][]) {
  
  orders.forEach((order: Order[]) => {
    if(order.length > 0) {
      const namer: string = restaurants[orders.indexOf(order)].name
      
      console.log(namer);
      order.forEach((eligible: Order) => {
        console.log(`Order ${order.indexOf(eligible) + 1}:${eligible.name}: ${eligible.price} `)
      })
    }
  })
}
/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, elligibleOrders);
// console.log(elligibleOrders);
