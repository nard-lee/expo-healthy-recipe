const recipes: any = [
  {
    recipe_id: "recipe1a2b3c4d",
    title: "Grilled Lemon Herb Chicken",
    description: "Juicy grilled chicken with a zesty lemon and herb marinade",
    category: "meat",
    created_at: new Date().toISOString(),
    img_url: "https://example.com/grilled-lemon-herb-chicken.jpg",
    ingredient: [
      { name: "chicken breasts", quantity: "4 pieces" },
      { name: "lemon juice", quantity: "1/4 cup" },
      { name: "olive oil", quantity: "1/4 cup" },
      { name: "fresh herbs (rosemary, thyme, oregano)", quantity: "2 tablespoons, chopped" },
      { name: "garlic", quantity: "3 cloves, minced" },
      { name: "salt", quantity: "1 teaspoon" },
      { name: "black pepper", quantity: "1/2 teaspoon" }
    ],
    instruction: [
      { description: "Mix lemon juice, olive oil, herbs, garlic, salt, and pepper in a bowl", step_number: 1 },
      { description: "Marinate chicken in the mixture for at least 30 minutes", step_number: 2 },
      { description: "Preheat grill to medium-high heat", step_number: 3 },
      { description: "Grill chicken for 6-8 minutes per side until cooked through", step_number: 4 },
      { description: "Let rest for 5 minutes before serving", step_number: 5 }
    ]
  },
  {
    recipe_id: "recipe2e3f4g5h",
    title: "Roasted Vegetable Medley",
    description: "A colorful mix of oven-roasted seasonal vegetables",
    category: "vegetable",
    created_at: new Date().toISOString(),
    img_url: "../../recipe_img/recipe001/recipe.jpg",
    ingredient: [
      { name: "bell peppers", quantity: "2, sliced" },
      { name: "zucchini", quantity: "2, sliced" },
      { name: "red onion", quantity: "1, cut into wedges" },
      { name: "cherry tomatoes", quantity: "1 cup" },
      { name: "olive oil", quantity: "3 tablespoons" },
      { name: "balsamic vinegar", quantity: "1 tablespoon" },
      { name: "dried herbs", quantity: "1 teaspoon" },
      { name: "salt", quantity: "1/2 teaspoon" },
      { name: "black pepper", quantity: "1/4 teaspoon" }
    ],
    instruction: [
      { description: "Preheat oven to 425°F (220°C)", step_number: 1 },
      { description: "Toss vegetables with oil, vinegar, herbs, salt, and pepper", step_number: 2 },
      { description: "Spread vegetables on a baking sheet", step_number: 3 },
      { description: "Roast for 20-25 minutes, stirring once halfway through", step_number: 4 },
      { description: "Serve hot as a side dish or over grains", step_number: 5 }
    ]
  },
  {
    recipe_id: "recipe3i4j5k6l",
    title: "Classic Chocolate Chip Cookies",
    description: "Soft and chewy chocolate chip cookies with a golden edge",
    category: "dessert",
    created_at: new Date().toISOString(),
    img_url: "https://example.com/chocolate-chip-cookies.jpg",
    ingredient: [
      { name: "all-purpose flour", quantity: "2 1/4 cups" },
      { name: "baking soda", quantity: "1 teaspoon" },
      { name: "salt", quantity: "1/2 teaspoon" },
      { name: "unsalted butter", quantity: "1 cup, softened" },
      { name: "granulated sugar", quantity: "3/4 cup" },
      { name: "brown sugar", quantity: "3/4 cup" },
      { name: "vanilla extract", quantity: "1 teaspoon" },
      { name: "eggs", quantity: "2 large" },
      { name: "chocolate chips", quantity: "2 cups" }
    ],
    instruction: [
      { description: "Preheat oven to 375°F (190°C)", step_number: 1 },
      { description: "Mix flour, baking soda, and salt in a bowl", step_number: 2 },
      { description: "Cream butter and sugars, then beat in vanilla and eggs", step_number: 3 },
      { description: "Gradually mix in flour mixture, then stir in chocolate chips", step_number: 4 },
      { description: "Drop spoonfuls of dough onto ungreased baking sheets", step_number: 5 },
      { description: "Bake for 9-11 minutes until golden brown", step_number: 6 },
      { description: "Cool on baking sheets for 2 minutes, then transfer to wire racks", step_number: 7 }
    ]
  },
  {
    recipe_id: "recipe4m5n6o7p",
    title: "Refreshing Mint Lemonade",
    description: "A cool and tangy homemade lemonade with fresh mint",
    category: "beverage",
    created_at: new Date().toISOString(),
    img_url: "../../recipe_img/recipe001/recipe.jpg",
    ingredient: [
      { name: "fresh lemon juice", quantity: "1 cup" },
      { name: "sugar", quantity: "1 cup" },
      { name: "water", quantity: "4 cups" },
      { name: "fresh mint leaves", quantity: "1/2 cup" },
      { name: "ice cubes", quantity: "as needed" }
    ],
    instruction: [
      { description: "Make simple syrup by dissolving sugar in 1 cup of water over heat", step_number: 1 },
      { description: "Cool the syrup and mix with lemon juice and remaining water", step_number: 2 },
      { description: "Muddle mint leaves and add to the lemonade", step_number: 3 },
      { description: "Refrigerate for at least 1 hour", step_number: 4 },
      { description: "Serve over ice, garnished with mint sprigs", step_number: 5 }
    ]
  },
  {
    recipe_id: "recipe5q6r7s8t",
    title: "Spicy Beef Tacos",
    description: "Flavorful ground beef tacos with a homemade spice mix",
    category: "meat",
    created_at: new Date().toISOString(),
    img_url: "https://example.com/spicy-beef-tacos.jpg",
    ingredient: [
      { name: "ground beef", quantity: "1 pound" },
      { name: "chili powder", quantity: "2 tablespoons" },
      { name: "cumin", quantity: "1 teaspoon" },
      { name: "paprika", quantity: "1 teaspoon" },
      { name: "garlic powder", quantity: "1/2 teaspoon" },
      { name: "onion powder", quantity: "1/2 teaspoon" },
      { name: "salt", quantity: "1/2 teaspoon" },
      { name: "black pepper", quantity: "1/4 teaspoon" },
      { name: "corn tortillas", quantity: "8" },
      { name: "toppings (lettuce, cheese, tomatoes)", quantity: "as desired" }
    ],
    instruction: [
      { description: "Brown ground beef in a skillet over medium heat", step_number: 1 },
      { description: "Add spices and cook for 1-2 minutes until fragrant", step_number: 2 },
      { description: "Warm tortillas in a separate skillet or microwave", step_number: 3 },
      { description: "Fill tortillas with beef mixture", step_number: 4 },
      { description: "Add desired toppings and serve", step_number: 5 }
    ]
  },
  {
    recipe_id: "recipe6u7v8w9x",
    title: "Caprese Salad",
    description: "Simple and elegant Italian salad with tomatoes, mozzarella, and basil",
    category: "vegetable",
    created_at: new Date().toISOString(),
    img_url: "../../recipe_img/recipe001/recipe.jpg",
    ingredient: [
      { name: "ripe tomatoes", quantity: "4, sliced" },
      { name: "fresh mozzarella", quantity: "8 oz, sliced" },
      { name: "fresh basil leaves", quantity: "1 cup" },
      { name: "extra virgin olive oil", quantity: "2 tablespoons" },
      { name: "balsamic glaze", quantity: "1 tablespoon" },
      { name: "salt", quantity: "to taste" },
      { name: "black pepper", quantity: "to taste" }
    ],
    instruction: [
      { description: "Arrange alternating slices of tomatoes and mozzarella on a platter", step_number: 1 },
      { description: "Tuck basil leaves between the slices", step_number: 2 },
      { description: "Drizzle with olive oil and balsamic glaze", step_number: 3 },
      { description: "Season with salt and pepper", step_number: 4 },
      { description: "Serve immediately at room temperature", step_number: 5 }
    ]
  },
  {
    recipe_id: "recipe7y8z9a0b",
    title: "Homemade Vanilla Ice Cream",
    description: "Creamy and rich vanilla ice cream made from scratch",
    category: "dessert",
    created_at: new Date().toISOString(),
    img_url: "https://example.com/vanilla-ice-cream.jpg",
    ingredient: [
      { name: "heavy cream", quantity: "2 cups" },
      { name: "whole milk", quantity: "1 cup" },
      { name: "granulated sugar", quantity: "3/4 cup" },
      { name: "vanilla extract", quantity: "1 tablespoon" },
      { name: "salt", quantity: "1/8 teaspoon" }
    ],
    instruction: [
      { description: "Whisk all ingredient together in a bowl until sugar dissolves", step_number: 1 },
      { description: "Pour mixture into an ice cream maker", step_number: 2 },
      { description: "Churn according to manufacturer's instruction", step_number: 3 },
      { description: "Transfer to a freezer-safe container", step_number: 4 },
      { description: "Freeze for at least 2 hours before serving", step_number: 5 }
    ]
  },
  {
    recipe_id: "recipe8c9d0e1f",
    title: "Green Smoothie Bowl",
    description: "Nutrient-packed smoothie bowl with spinach, banana, and toppings",
    category: "beverage",
    created_at: new Date().toISOString(),
    img_url: "../../recipe_img/recipe001/recipe.jpg",
    ingredient: [
      { name: "frozen banana", quantity: "1 large" },
      { name: "spinach", quantity: "2 cups" },
      { name: "Greek yogurt", quantity: "1/2 cup" },
      { name: "almond milk", quantity: "1/4 cup" },
      { name: "honey", quantity: "1 tablespoon" },
      { name: "chia seeds", quantity: "1 tablespoon" },
      { name: "granola", quantity: "1/4 cup" },
      { name: "fresh berries", quantity: "1/4 cup" }
    ],
    instruction: [
      { description: "Blend banana, spinach, yogurt, almond milk, and honey until smooth", step_number: 1 },
      { description: "Pour into a bowl", step_number: 2 },
      { description: "Top with chia seeds, granola, and fresh berries", step_number: 3 },
      { description: "Serve immediately", step_number: 4 }
    ]
  },
  {
    recipe_id: "recipe9g0h1i2j",
    title: "Baked Salmon with Lemon Butter",
    description: "Tender baked salmon fillets with a zesty lemon butter sauce",
    category: "meat",
    created_at: new Date().toISOString(),
    img_url: "https://example.com/baked-salmon.jpg",
    ingredient: [
      { name: "salmon fillets", quantity: "4 (6 oz each)" },
      { name: "butter", quantity: "1/4 cup, melted" },
      { name: "lemon juice", quantity: "2 tablespoons" },
      { name: "garlic", quantity: "2 cloves, minced" },
      { name: "dill", quantity: "1 tablespoon, chopped" },
      { name: "salt", quantity: "1/2 teaspoon" },
      { name: "black pepper", quantity: "1/4 teaspoon" },
      { name: "lemon slices", quantity: "for garnish" }
    ],
    instruction: [
      { description: "Preheat oven to 375°F (190°C)", step_number: 1 },
      { description: "Mix melted butter, lemon juice, garlic, dill, salt, and pepper", step_number: 2 },
      { description: "Place salmon in a baking dish and pour butter mixture over it", step_number: 3 },
      { description: "Bake for 15-20 minutes until salmon flakes easily", step_number: 4 },
      { description: "Garnish with lemon slices and serve", step_number: 5 }
    ]
  },
  {
    recipe_id: "recipe0k1l2m3n",
    title: "Roasted Brussels Sprouts",
    description: "Crispy and flavorful oven-roasted Brussels sprouts",
    category: "vegetable",
    created_at: new Date().toISOString(),
    img_url: "../../recipe_img/recipe001/recipe.jpg",
    ingredient: [
      { name: "Brussels sprouts", quantity: "1 pound, trimmed and halved" },
      { name: "olive oil", quantity: "2 tablespoons" },
      { name: "balsamic vinegar", quantity: "1 tablespoon" },
      { name: "garlic powder", quantity: "1/2 teaspoon" },
      { name: "salt", quantity: "1/2 teaspoon" },
      { name: "black pepper", quantity: "1/4 teaspoon" }
    ],
    instruction: [
      { description: "Preheat oven to 400°F (200°C)", step_number: 1 },
      { description: "Toss Brussels sprouts with oil, vinegar, and seasonings", step_number: 2 },
      { description: "Spread on a baking sheet in a single layer", step_number: 3 },
      { description: "Roast for 20-25 minutes, stirring halfway through", step_number: 4 },
      { description: "Serve hot as a side dish", step_number: 5 }
    ]
  },
  {
    recipe_id: "recipe1o2p3q4r",
    title: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
    category: "dessert",
    created_at: new Date().toISOString(),
    img_url: "https://example.com/tiramisu.jpg",
    ingredient: [
      { name: "ladyfinger cookies", quantity: "24" },
      { name: "strong brewed coffee", quantity: "1 cup, cooled" },
      { name: "mascarpone cheese", quantity: "16 oz" },
      { name: "heavy cream", quantity: "1 cup" },
      { name: "sugar", quantity: "1/4 cup" },
      { name: "vanilla extract", quantity: "1 teaspoon" },
      { name: "cocoa powder", quantity: "2 tablespoons" }
    ],
    instruction: [
      { description: "Mix coffee with 2 tablespoons of sugar", step_number: 1 },
      { description: "Dip ladyfingers in coffee mixture and layer in a dish", step_number: 2 },
      { description: "Beat mascarpone, cream, remaining sugar, and vanilla until fluffy", step_number: 3 },
      { description: "Spread half the cream mixture over the ladyfingers", step_number: 4 },
      { description: "Repeat layers and dust with cocoa powder", step_number: 5 },
      { description: "Refrigerate for at least 4 hours before serving", step_number: 6 }
    ]
  },
  {
    recipe_id: "recipe2s3t4u5v",
    title: "Spinach and Feta Stuffed Chicken Breast",
    description: "Juicy chicken breasts stuffed with spinach and feta cheese",
    category: "meat",
    created_at: new Date().toISOString(),
    img_url: "../../recipe_img/recipe001/recipe.jpg",
    ingredient: [
      { name: "chicken breasts", quantity: "4" },
      { name: "frozen spinach", quantity: "10 oz, thawed and drained" },
      { name: "feta cheese", quantity: "1/2 cup, crumbled" },
      { name: "garlic", quantity: "2 cloves, minced" },
      { name: "olive oil", quantity: "2 tablespoons" },
      { name: "salt", quantity: "1 teaspoon" },
      { name: "black pepper", quantity: "1/2 teaspoon" }
    ],
    instruction: [
      { description: "Preheat oven to 375°F (190°C)", step_number: 1 },
      { description: "Mix spinach, feta, and garlic in a bowl", step_number: 2 },
      { description: "Cut a pocket in each chicken breast and stuff with mixture", step_number: 3 },
      { description: "Season chicken with salt and pepper", step_number: 4 },
      { description: "Heat oil in an oven-safe skillet and sear chicken on both sides", step_number: 5 },
      { description: "Transfer skillet to oven and bake for 15-20 minutes", step_number: 6 }
    ]
  },
  {
    recipe_id: "recipe3w4x5y6z",
    title: "Homemade Margherita Pizza",
    description: "Classic Neapolitan-style pizza with fresh mozzarella, tomatoes, and basil",
    category: "vegetable",
    created_at: new Date().toISOString(),
    img_url: "https://example.com/margherita-pizza.jpg",
    ingredient: [
      { name: "pizza dough", quantity: "1 pound" },
      { name: "San Marzano tomatoes", quantity: "1 can (14 oz), crushed" },
      { name: "fresh mozzarella", quantity: "8 oz, sliced" },
      { name: "fresh basil leaves", quantity: "1/4 cup" },
      { name: "extra virgin olive oil", quantity: "2 tablespoons" },
      { name: "salt", quantity: "to taste" }
    ],
    instruction: [
      { description: "Preheat oven with a pizza stone to 500°F (260°C)", step_number: 1 },
      { description: "Stretch dough into a 12-inch circle", step_number: 2 },
      { description: "Spread crushed tomatoes over dough, leaving a border", step_number: 3 },
      { description: "Top with mozzarella slices", step_number: 4 },
      { description: "Bake for 8-10 minutes until crust is golden", step_number: 5 },
      { description: "Top with fresh basil and a drizzle of olive oil", step_number: 6 }
    ]
  },
  {
    recipe_id: "recipe4a5b6c7d",
    title: "Mango Lassi",
    description: "Refreshing Indian yogurt drink with ripe mangoes",
    category: "beverage",
    created_at: new Date().toISOString(),
    img_url: "../../recipe_img/recipe001/recipe.jpg",
    ingredient: [
      { name: "ripe mangoes", quantity: "2, peeled and chopped" },
      { name: "plain yogurt", quantity: "1 cup" },
      { name: "milk", quantity: "1/2 cup" },
      { name: "sugar", quantity: "2 tablespoons" },
      { name: "cardamom powder", quantity: "1/4 teaspoon" },
      { name: "ice cubes", quantity: "1 cup" }
    ],
    instruction: [
      { description: "Blend mangoes, yogurt, milk, sugar, and cardamom until smooth", step_number: 1 },
      { description: "Add ice cubes and blend until frothy", step_number: 2 },
      { description: "Pour into glasses", step_number: 3 },
      { description: "Garnish with a sprinkle of cardamom powder if desired", step_number: 4 },
      { description: "Serve immediately", step_number: 5 }
    ]
  },
  {
    recipe_id: "recipe5e6f7g8h",
    title: "Beef and Broccoli Stir Fry",
    description: "Quick and easy Chinese-inspired beef and broccoli dish",
    category: "meat",
    created_at: new Date().toISOString(),
    img_url: "https://example.com/beef-broccoli-stirfry.jpg",
    ingredient: [
      { name: "flank steak", quantity: "1 pound, sliced thinly" },
      { name: "broccoli florets", quantity: "4 cups" },
      { name: "soy sauce", quantity: "1/4 cup" },
      { name: "brown sugar", quantity: "2 tablespoons" },
      { name: "cornstarch", quantity: "1 tablespoon" },
      { name: "sesame oil", quantity: "1 teaspoon" },
      { name: "vegetable oil", quantity: "2 tablespoons" },
      { name: "garlic", quantity: "3 cloves, minced" },
      { name: "ginger", quantity: "1 tablespoon, grated" }
    ],
    instruction: [
      { description: "Mix soy sauce, brown sugar, cornstarch, and sesame oil for sauce", step_number: 1 },
      { description: "Heat vegetable oil in a wok or large skillet", step_number: 2 },
      { description: "Stir fry beef until browned, remove from pan", step_number: 3 },
      { description: "Stir fry garlic, ginger, and broccoli for 3-4 minutes", step_number: 4 },
      { description: "Return beef to pan, add sauce, and cook until thickened", step_number: 5 },
      { description: "Serve hot over rice", step_number: 6 }
    ]
  },
  {
    recipe_id: "recipe6i7j8k9l",
    title: "Greek Salad",
    description: "Fresh and tangy salad with tomatoes, cucumbers, olives, and feta",
    category: "vegetable",
    created_at: new Date().toISOString(),
    img_url: "../../recipe_img/recipe001/recipe.jpg",
    ingredient: [
      { name: "tomatoes", quantity: "4, cut into wedges" },
      { name: "cucumber", quantity: "1, sliced" },
      { name: "red onion", quantity: "1/2, thinly sliced" },
      { name: "kalamata olives", quantity: "1/2 cup" },
      { name: "feta cheese", quantity: "4 oz, cubed" },
      { name: "extra virgin olive oil", quantity: "1/4 cup" },
      { name: "red wine vinegar", quantity: "2 tablespoons" },
      { name: "dried oregano", quantity: "1 teaspoon" },
      { name: "salt", quantity: "to taste" },
      { name: "black pepper", quantity: "to taste" }
    ],
    instruction: [
      { description: "Combine tomatoes, cucumber, onion, olives, and feta in a bowl", step_number: 1 },
      { description: "Whisk together olive oil, vinegar, oregano, salt, and pepper", step_number: 2 },
      { description: "Pour dressing over salad and toss gently", step_number: 3 },
      { description: "Let sit for 10 minutes to allow flavors to meld", step_number: 4 },
      { description: "Serve chilled or at room temperature", step_number: 5 }
    ]
  },
  {
    recipe_id: "recipe7m8n9o0p",
    title: "Lemon Blueberry Muffins",
    description: "Moist and tangy muffins bursting with fresh blueberries",
    category: "dessert",
    created_at: new Date().toISOString(),
    img_url: "https://example.com/lemon-blueberry-muffins.jpg",
    ingredient: [
      { name: "all-purpose flour", quantity: "2 cups" },
      { name: "sugar", quantity: "3/4 cup" },
      { name: "baking powder", quantity: "2 teaspoons" },
      { name: "salt", quantity: "1/4 teaspoon" },
      { name: "eggs", quantity: "2" },
      { name: "milk", quantity: "1/2 cup" },
      { name: "vegetable oil", quantity: "1/2 cup" },
      { name: "lemon zest", quantity: "1 tablespoon" },
      { name: "lemon juice", quantity: "2 tablespoons" },
      { name: "fresh blueberries", quantity: "1 1/2 cups" }
    ],
    instruction: [
      { description: "Preheat oven to 375°F (190°C) and line a muffin tin", step_number: 1 },
      { description: "Mix flour, sugar, baking powder, and salt in a bowl", step_number: 2 },
      { description: "Whisk eggs, milk, oil, lemon zest, and juice in another bowl", step_number: 3 },
      { description: "Combine wet and dry ingredient, then fold in blueberries", step_number: 4 },
      { description: "Divide batter among muffin cups", step_number: 5 },
      { description: "Bake for 20-25 minutes until golden brown", step_number: 6 }
    ]
  },
  {
    recipe_id: "recipe8q9r0s1t",
    title: "Homemade Iced Tea",
    description: "Refreshing and customizable iced tea perfect for hot days",
    category: "beverage",
    created_at: new Date().toISOString(),
    img_url: "../../recipe_img/recipe001/recipe.jpg",
    ingredient: [
      { name: "black tea bags", quantity: "4" },
      { name: "water", quantity: "4 cups" },
      { name: "sugar", quantity: "1/4 cup (optional)" },
      { name: "lemon slices", quantity: "2" },
      { name: "fresh mint leaves", quantity: "1/4 cup" },
      { name: "ice cubes", quantity: "as needed" }
    ],
    instruction: [
      { description: "Bring water to a boil and remove from heat", step_number: 1 },
      { description: "Add tea bags and steep for 5 minutes", step_number: 2 },
      { description: "Remove tea bags and stir in sugar if using", step_number: 3 },
      { description: "Let tea cool to room temperature", step_number: 4 },
      { description: "Refrigerate until chilled", step_number: 5 },
      { description: "Serve over ice with lemon slices and mint leaves", step_number: 6 }
    ]
  },
  {
    recipe_id: "recipe9u0v1w2x",
    title: "Mushroom Risotto",
    description: "Creamy Italian rice dish with savory mushrooms and Parmesan",
    category: "vegetable",
    created_at: new Date().toISOString(),
    img_url: "https://example.com/mushroom-risotto.jpg",
    ingredient: [
      { name: "arborio rice", quantity: "1 1/2 cups" },
      { name: "mushrooms", quantity: "8 oz, sliced" },
      { name: "onion", quantity: "1, finely chopped" },
      { name: "garlic", quantity: "2 cloves, minced" },
      { name: "white wine", quantity: "1/2 cup" },
      { name: "vegetable broth", quantity: "4 cups, warm" },
      { name: "butter", quantity: "2 tablespoons" },
      { name: "Parmesan cheese", quantity: "1/2 cup, grated" },
      { name: "olive oil", quantity: "2 tablespoons" },
      { name: "fresh thyme", quantity: "1 teaspoon" },
      { name: "salt", quantity: "to taste" },
      { name: "black pepper", quantity: "to taste" }
    ],
    instruction: [
      { description: "Sauté mushrooms in 1 tablespoon olive oil, set aside", step_number: 1 },
      { description: "In the same pan, sauté onion and garlic in remaining oil", step_number: 2 },
      { description: "Add rice and cook until translucent", step_number: 3 },
      { description: "Add wine and simmer until absorbed", step_number: 4 },
      { description: "Add broth 1/2 cup at a time, stirring until absorbed", step_number: 5 },
      { description: "Stir in mushrooms, butter, Parmesan, and thyme", step_number: 6 },
      { description: "Season with salt and pepper, serve immediately", step_number: 7 }
    ]
  },
  {
    recipe_id: "recipe0a1b2c3d",
    title: "Homemade Guacamole",
    description: "Fresh and creamy avocado dip with zesty lime and cilantro",
    category: "vegetable",
    created_at: new Date().toISOString(),
    img_url: "https://example.com/homemade-guacamole.jpg",
    ingredient: [
      { name: "ripe avocados", quantity: "3, pitted and peeled" },
      { name: "lime juice", quantity: "1 tablespoon" },
      { name: "red onion", quantity: "1/4 cup, finely chopped" },
      { name: "Roma tomatoes", quantity: "2, diced" },
      { name: "fresh cilantro", quantity: "1/4 cup, chopped" },
      { name: "jalapeño pepper", quantity: "1, seeded and minced" },
      { name: "garlic", quantity: "1 clove, minced" },
      { name: "ground cumin", quantity: "1/4 teaspoon" },
      { name: "salt", quantity: "1/2 teaspoon" },
      { name: "black pepper", quantity: "1/4 teaspoon" }
    ],
    instruction: [
      { description: "Mash avocados in a bowl with a fork", step_number: 1 },
      { description: "Stir in lime juice to prevent browning", step_number: 2 },
      { description: "Add onion, tomatoes, cilantro, jalapeño, and garlic", step_number: 3 },
      { description: "Mix in cumin, salt, and pepper", step_number: 4 },
      { description: "Taste and adjust seasonings if needed", step_number: 5 },
      { description: "Serve immediately with tortilla chips", step_number: 6 }
    ]
  }
]

export { recipes }