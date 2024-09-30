
interface RecipeData {
  id: number,
  name: string,
  dish: string,
  shortDesc: string,
  src: string
}

const dishesData: RecipeData[] = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    dish: "Pasta",
    shortDesc: "Creamy pasta dish with bacon and cheese",
    src: require("../assets/images/carbonara.jpg"),
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    dish: "Curry",
    shortDesc: "Spiced curry with grilled chicken",
    src: require("../assets/images/chicken.jpg"),
  },
  {
    id: 3,
    name: "Caprese Salad",
    dish: "Salad",
    shortDesc: "Fresh salad with tomatoes, mozzarella, and basil",
    src: require("../assets/images/salad.jpg"),
  },
  {
    id: 4,
    name: "Beef Tacos",
    dish: "Mexican",
    shortDesc: "Tortillas filled with seasoned beef and toppings",
    src: require("../assets/images/taco.jpg"),
  },
  {
    id: 5,
    name: "Mushroom Risotto",
    dish: "Risotto",
    shortDesc: "Creamy Italian rice dish with mushrooms",
    src: require("../assets/images/risoto.jpg"),
  },
  {
    id: 6,
    name: "Vegetable Stir-Fry",
    dish: "Asian",
    shortDesc: "Assorted vegetables stir-fried in a savory sauce",
    src: require("../assets/images/vegie.jpg"),
  },
  {
    id: 7,
    name: "Grilled Salmon",
    dish: "Seafood",
    shortDesc: "Fresh salmon fillet grilled to perfection",
    src: require("../assets/images/salmon.jpg"),
  },
  {
    id: 8,
    name: "Spinach and Feta Pie",
    dish: "Pie",
    shortDesc: "Savory pie with spinach, feta cheese, and herbs",
    src: require("../assets/images/pie.jpeg"),
  },
  {
    id: 9,
    name: "Chicken Caesar Salad",
    dish: "Salad",
    shortDesc: "Classic Caesar salad with grilled chicken",
    src: require("../assets/images/csalad.jpg"),
  },
  {
    id: 10,
    name: "Beef Biryani",
    dish: "Rice",
    shortDesc: "Fragrant rice dish with spiced beef and herbs",
    src: require("../assets/images/biryani.jpg"),
  },
];

export default dishesData;