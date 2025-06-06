import { createContext, useState } from 'react';


export const CardsContext = createContext(null);

const ContextApi = ({ children }) => {
const recipes = [
  {
    id: "iyhu66kjb",
    name: "Grilled Chicken Salad",
    image: "https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-salad-index-6628169554c88.jpg?crop=0.6667863339915036xw:1xh;center,top&resize=1200:*",
    from: "American",
    rating: 4.7,
    type: "recommended",
    ingredients: ["Chicken Breast", "Lettuce", "Cucumber", "Tomatoes", "Olive Oil"],
    tags: ["weight loss", "high protein"],
    isHealthy: true
  },
  {
    id: "iyhu66kjb276",
    name: "Oats Porridge",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CmqNsrEEwv5onLbFtRKQJoqG0r-QuPhzcg&s",
    from: "Indian",
    rating: 4.5,
    type: "trending",
    ingredients: ["Oats", "Milk", "Banana", "Chia Seeds"],
    tags: ["weight loss", "heart healthy"],
    isHealthy: true
  },
  {
    id: "9556iyhu66kjb",
    name: "Sushi Rolls",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZu16PYJsVYZbQG2l41mawYBhXa67N2nLeA&s",
    from: "Japanese",
    rating: 4.6,
    type: "recommended",
    ingredients: ["Rice", "Nori", "Fish", "Cucumber", "Avocado"],
    tags: [ "low fat", "brain healthy"],
    isHealthy: true
  },
  {
    id: "iyhsdiuh",
    name: "Butter Chicken",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/chicken-butter-masala-recipe.jpg",
    from: "Indian",
    rating: 4.2,
    type: "more",
    ingredients: ["Chicken", "Butter", "Tomato", "Cream", "Spices"],
    tags: ["protein-rich", "tasty"],
    isHealthy: false
  },
  {
    id: "6513hgfgv",
    name: "Quinoa Bowl",
    image: "https://images.themodernproper.com/production/posts/2020/QuinoaBowl_4.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1737605526&s=b91b6baac05eb76bd048a76d12f4a9cd",
    from: "Mediterranean",
    rating: 4.8,
    type: "recommended",
    ingredients: ["Quinoa", "Black Beans", "Corn", "Tomato", "Avocado"],
    tags: ["weight loss", "vegan"],
    isHealthy: true
  },
  {
    id: "iy9865jbn",
    name: "Veggie Stir Fry",
    image: "https://s.lightorangebean.com/media/20240914144639/Thai-Vegetable-Stir-Fry-with-Lime-and-Ginger_done.png",
    from: "Chinese",
    rating: 4.3,
    type: "more",
    ingredients: ["Broccoli", "Carrot", "Bell Pepper", "Soy Sauce", "Garlic"],
    tags: ["detox", "low calorie"],
    isHealthy: true
  },
{
  id: "98656hvhbjkn",
    name: "Paneer Tikka",
    image: "https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg",
    from: "Indian",
    rating: 4.5,
    type: "trending",
    ingredients: ["Paneer", "Yogurt", "Spices", "Capsicum", "Onion"],
    tags: ["high protein", "vegetarian"],
    isHealthy: true
  },
  {
    id: "iyiijomlytush",
    name: "Avocado Toast",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9AIvAc6dkD5GTVhVASi91F4Jc4n7AbOFhw&s",
    from: "Western",
    rating: 4.4,
    type: "trending",
    ingredients: ["Bread", "Avocado", "Lemon", "Chili Flakes"],
    tags: ["weight loss", "heart healthy", ],
    isHealthy: true
  },
  {
    id: "iyh98966njjk",
    name: "Cheeseburger",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWCRJU-EZr7IxYf3a1-8PB2qacu1-AwQx4SPCrJvUID66fryXBfzlKf5igTtlpx7zhtE&usqp=CAU",
    from: "American",
    rating: 3.9,
    type: "more",
    ingredients: ["Bun", "Beef Patty", "Cheese", "Lettuce", "Tomato"],
    tags: ["high fat", "high calorie"],
    isHealthy: false
  },
  {
    id: "iyhu66kjb596jhbbun",
    name: "Greek Yogurt Bowl",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZnS6xmoQSBdPaEidzhhQPgyGXBV2ccINyJH2IpFyx10jv-on3S0PUoiF1lmrfnrCr84&usqp=CAU",
    from: "Greek",
    rating: 4.7,
    type: "recommended",
    ingredients: ["Greek Yogurt", "Honey", "Berries", "Granola", "Almonds"],
    tags: [ "high protein", "weight loss"],
    isHealthy: true
  }
];

const [userlikedRecipes, setlikedRecipes] = useState([])

  return (
    <CardsContext.Provider value={[recipes , userlikedRecipes , setlikedRecipes]}>
      {children}
    </CardsContext.Provider>
  );
};

export default ContextApi;