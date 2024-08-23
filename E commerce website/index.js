var makeupProduct = {
  Fruits: {
    Tropical: {
      img: "images2/Mango.jpg",
      itemName: "Mango",
      price: "$2",
      description: "Sweet and juicy tropical fruit",
    },
    Citrus: {
      img: "images2/orange.jpg",
      itemName: "Orange",
      price: "$1",
      description: "Tangy and refreshing citrus fruit",
    },
    Berries: {
      img: "images2/stawberry.jpg",
      itemName: "Strawberry",
      price: "$3",
      description: "Sweet and juicy red berries",
    },
    StoneFruits: {
      img: "images2/Peeach.jpg",
      itemName: "Peach",
      price: "$2.5",
      description: "Soft and sweet stone fruit",
    },
    Melons: {
      img: "images2/watermelon.jpg",
      itemName: "Watermelon",
      price: "$4",
      description: "Refreshing and hydrating melon",
    },
  },
  Vegetables: {
    Leafy: {
      img: "images2/spanih.jpg",
      itemName: "Spinach",
      price: "$1.5",
      description: "Nutrient-rich leafy green",
    },
    Root: {
      img: "images2/carrot.jpg",
      itemName: "Carrot",
      price: "$1",
      description: "Crunchy and sweet root vegetable",
    },
    Cruciferous: {
      img: "images2/broccoli.jpg",
      itemName: "Broccoli",
      price: "$2",
      description: "Healthy and nutritious green vegetable",
    },
    Allium: {
      img: "images2/garlic.jpg",
      itemName: "Garlic",
      price: "$0.5",
      description: "Aromatic and flavorful vegetable",
    },
    Nightshade: {
      img: "images2/tomato.jpg",
      itemName: "Tomato",
      price: "$1.2",
      description: "Juicy and tangy fruit often used as a vegetable",
    },
  },
  Dairy: {
    Milk: {
      img: "images2/Whole milk.jpg",
      itemName: "Whole Milk",
      price: "$1.5",
      description: "Rich and creamy whole milk",
    },
    Cheese: {
      img: "images2/chedder cheese.jpg",
      itemName: "Cheddar Cheese",
      price: "$3",
      description: "Sharp and tangy cheese",
    },
    Yogurt: {
      img: "images2/greek yogurt.jpg",
      itemName: "Greek Yogurt",
      price: "$2.5",
      description: "Thick and creamy yogurt",
    },
    Butter: {
      img: "images2/unsalted butter.jpg",
      itemName: "Unsalted Butter",
      price: "$2",
      description: "Rich and creamy butter",
    },
    Cream: {
      img: "images2/heavy cream.jpg",
      itemName: "Heavy Cream",
      price: "$3.5",
      description: "Thick and luxurious cream",
    },
  },
  Bakery: {
    Bread: {
      img: "images2/Whole wheat bread.jpg",
      itemName: "Whole Wheat Bread",
      price: "$2",
      description: "Nutritious whole wheat bread",
    },
    Pastries: {
      img: "images2/creissant.jpg",
      itemName: "Croissant",
      price: "$2.5",
      description: "Flaky and buttery pastry",
    },
    Cookies: {
      img: "images2/chocalate chip cookies.jpg",
      itemName: "Chocolate Chip Cookies",
      price: "$3",
      description: "Sweet cookies with chocolate chips",
    },
    Cakes: {
      img: "images2/choalate cake.jpg",
      itemName: "Chocolate Cake",
      price: "$4",
      description: "Rich and moist chocolate cake",
    },
    Muffins: {
      img: "images2/bluberry muffins.jpg",
      itemName: "Blueberry Muffins",
      price: "$2.5",
      description: "Sweet muffins with blueberries",
    },
  },
  Snacks: {
    Chips: {
      img: "images2/potato chips.jpg",
      itemName: "Potato Chips",
      price: "$1.5",
      description: "Crispy and salty potato chips",
    },
    Nuts: {
      img: "images2/Almonds.jpg",
      itemName: "Almonds",
      price: "$3",
      description: "Crunchy and nutritious almonds",
    },
    Cookies: {
      img: "images2/Oatmeals cookies.jpg",
      itemName: "Oatmeal Cookies",
      price: "$2.5",
      description: "Chewy cookies with oats",
    },
    Pretzels: {
      img: "images2/Pretzel sticks.jpg",
      itemName: "Pretzel Sticks",
      price: "$2",
      description: "Salty and crunchy pretzel sticks",
    },
    "Granola Bars": {
      img: "images2/Granola bar.jpg",
      itemName: "Granola Bar",
      price: "$1.8",
      description: "Healthy and chewy granola bar",
    },
  },
  Beverages: {
    Juice: {
      img: "images2/Orange juice.jpg",
      itemName: "Orange Juice",
      price: "$3",
      description: "Freshly squeezed orange juice",
    },
    Soda: {
      img: "images2/Cola.jpg",
      itemName: "Cola",
      price: "$1.2",
      description: "Classic cola drink",
    },
    Tea: {
      img: "images2/green tea.jpg",
      itemName: "Green Tea",
      price: "$2",
      description: "Refreshing green tea",
    },
    Coffee: {
      img: "images2/espresso.jpg",
      itemName: "Espresso",
      price: "$2.5",
      description: "Strong and bold espresso",
    },
    Water: {
      img: "images2/sparkling water.jpg",
      itemName: "Sparkling Water",
      price: "$1",
      description: "Carbonated and refreshing water",
    },
  },
  Seafood: {
    Fish: {
      img: "images2/Salmon.jpg",
      itemName: "Salmon",
      price: "$10",
      description: "Fresh and flaky salmon",
    },
    Shellfish: {
      img: "images2/shrimp.jpg",
      itemName: "Shrimp",
      price: "$12",
      description: "Tender and succulent shrimp",
    },
    Crab: {
      img: "images2/king crab.jpg",
      itemName: "King Crab",
      price: "$20",
      description: "Sweet and rich king crab",
    },
    Squid: {
      img: "images2/calamari.jpg",
      itemName: "Calamari",
      price: "$15",
      description: "Crispy and tender calamari",
    },
    Tuna: {
      img: "images2/tuna steak.jpg",
      itemName: "Tuna Steak",
      price: "$18",
      description: "Juicy and meaty tuna steak",
    },
  },
  Meat: {
    Beef: {
      img: "images2/ribeye steak.jpg",
      itemName: "Ribeye Steak",
      price: "$25",
      description: "Tender and juicy ribeye steak",
    },
    Pork: {
      img: "images2/pork chops.jpg",
      itemName: "Pork Chops",
      price: "$15",
      description: "Savory and flavorful pork chops",
    },
    Chicken: {
      img: "images2/chicken breast.jpg",
      itemName: "Chicken Breast",
      price: "$10",
      description: "Lean and healthy chicken breast",
    },
    Lamb: {
      img: "images2/lamb shank.jpg",
      itemName: "Lamb Shank",
      price: "$20",
      description: "Tender and rich lamb shank",
    },
    Turkey: {
      img: "images2/turkey bresat.jpg",
      itemName: "Turkey Breast",
      price: "$12",
      description: "Lean and moist turkey breast",
    },
  },
  Pasta: {
    Spaghetti: {
      img: "images2/spaghetti.jpg",
      itemName: "Spaghetti",
      price: "$3",
      description: "Classic Italian pasta",
    },
    Penne: {
      img: "images2/penne.jpg",
      itemName: "Penne",
      price: "$3.5",
      description: "Tube-shaped pasta",
    },
    Fettuccine: {
      img: "images2/fettuccine.jpg",
      itemName: "Fettuccine",
      price: "$4",
      description: "Flat and wide pasta",
    },
    Macaroni: {
      img: "images2/macroni.jpg",
      itemName: "Macaroni",
      price: "$2.5",
      description: "Small and curved pasta",
    },
    Lasagna: {
      img: "images2/lasagna.jpg",
      itemName: "Lasagna",
      price: "$5",
      description: "Layered pasta dish",
    },
  },
  Sauces: {
    Tomato: {
      img: "images2/marinarra sauce.jpg",
      itemName: "Marinara Sauce",
      price: "$3",
      description: "Classic tomato-based sauce",
    },
    Cream: {
      img: "images2/alfredo sauce.jpg",
      itemName: "Alfredo Sauce",
      price: "$4",
      description: "Rich and creamy sauce",
    },
    Pesto: {
      img: "images2/pesto sauce.jpg",
      itemName: "Pesto Sauce",
      price: "$4.5",
      description: "Basil and garlic sauce",
    },
    Soy: {
      img: "images2/soy sauce.jpg",
      itemName: "Soy Sauce",
      price: "$2",
      description: "Savory and salty sauce",
    },
    BBQ: {
      img: "images2/barbecue sauce.jpg",
      itemName: "Barbecue Sauce",
      price: "$3.5",
      description: "Sweet and smoky sauce",
    },
  },
  "Frozen Foods": {
    "Ice Cream": {
      img: "images2/vanilla icecream.jpg",
      itemName: "Vanilla Ice Cream",
      price: "$4",
      description: "Creamy vanilla ice cream",
    },
    Pizza: {
      img: "images2/pepperoni pizza.jpg",
      itemName: "Pepperoni Pizza",
      price: "$6",
      description: "Frozen pepperoni pizza",
    },
    Vegetables: {
      img: "images2/frozen broccoli.jpg",
      itemName: "Frozen Broccoli",
      price: "$3",
      description: "Frozen green broccoli",
    },
    Meals: {
      img: "images2/hicken nuggets.jpg",
      itemName: "Chicken Nuggets",
      price: "$5",
      description: "Breaded chicken nuggets",
    },
    Fruit: {
      img: "images2/frozen berries.jpg",
      itemName: "Frozen Berries",
      price: "$4.5",
      description: "Mixed frozen berries",
    },
  },
  "Canned Goods": {
    Vegetables: {
      img: "images2/corn.jpg",
      itemName: "Corn",
      price: "$1.5",
      description: "Canned sweet corn",
    },
    Beans: {
      img: "images2/black beans.jpg",
      itemName: "Black Beans",
      price: "$2",
      description: "Canned black beans",
    },
    Soups: {
      img: "images2/chicken soap.jpg",
      itemName: "Chicken Soup",
      price: "$2.5",
      description: "Canned chicken soup",
    },
    Tomatoes: {
      img: "images2/diced tomatoes.jpg",
      itemName: "Diced Tomatoes",
      price: "$1.8",
      description: "Canned diced tomatoes",
    },
    Fruit: {
      img: "images2/peaches.jpg",
      itemName: "Peaches",
      price: "$2.2",
      description: "Canned peaches",
    },
  },
  Spices: {
    Herbs: {
      img: "images2/basil.jpg",
      itemName: "Basil",
      price: "$1.5",
      description: "Dried basil leaves",
    },
    Blends: {
      img: "images2/italian seasoning.jpg",
      itemName: "Italian Seasoning",
      price: "$2",
      description: "Blend of Italian herbs",
    },
    Hot: {
      img: "images2/ribeye steak.jpg",
      itemName: "Cayenne Pepper",
      price: "$1.8",
      description: "Spicy cayenne pepper",
    },
    Salt: {
      img: "images2/sea salt.jpg",
      itemName: "Sea Salt",
      price: "$2",
      description: "Natural sea salt",
    },
    Pepper: {
      img: "images2/black paper.jpg",
      itemName: "Black Pepper",
      price: "$1.8",
      description: "Ground black pepper",
    },
  },
  Condiments: {
    Ketchup: {
      img: "images2/tomato ketchup.jpg",
      itemName: "Tomato Ketchup",
      price: "$2",
      description: "Classic tomato ketchup",
    },
    Mustard: {
      img: "images2/yellow mustard.jpg",
      itemName: "Yellow Mustard",
      price: "$1.5",
      description: "Tangy yellow mustard",
    },
    Mayo: {
      img: "images2/mayonnaise.jpg",
      itemName: "Mayonnaise",
      price: "$2",
      description: "Creamy mayonnaise",
    },
    Salsa: {
      img: "images2/salsa.jpg",
      itemName: "Salsa",
      price: "$3",
      description: "Spicy tomato salsa",
    },
    Relish: {
      img: "images2/pickle relish.jpg",
      itemName: "Pickle Relish",
      price: "$2",
      description: "Sweet and tangy pickle relish",
    },
  },
  Breakfast: {
    Cereal: {
      img: "images2/cornflakes.jpg",
      itemName: "Cornflakes",
      price: "$3",
      description: "Crunchy cornflakes cereal",
    },
    Oatmeal: {
      img: "images2/instant oatmeal.jpg",
      itemName: "Instant Oatmeal",
      price: "$2",
      description: "Quick and easy oatmeal",
    },
    "Pancake Mix": {
      img: "images2/pancake mix.jpg",
      itemName: "Pancake Mix",
      price: "$3",
      description: "Mix for fluffy pancakes",
    },
    Granola: {
      img: "images2/granoola.jpg",
      itemName: "Granola",
      price: "$4",
      description: "Crunchy and healthy granola",
    },
    Bagels: {
      img: "images2/plain bagela.jpg",
      itemName: "Plain Bagels",
      price: "$2.5",
      description: "Soft and chewy bagels",
    },
  },
  "Frozen Desserts": {
    "Ice Cream": {
      img: "images2/chocalate ice cream.jpg",
      itemName: "Chocolate Ice Cream",
      price: "$4",
      description: "Rich chocolate ice cream",
    },
    "Frozen Yogurt": {
      img: "images2/fresh yogurt.jpg",
      itemName: "Frozen Yogurt",
      price: "$4.5",
      description: "Creamy and tangy frozen yogurt",
    },
    Sorbet: {
      img: "images2/mango sorbet.jpg",
      itemName: "Mango Sorbet",
      price: "$4",
      description: "Sweet and fruity mango sorbet",
    },
    Popsicles: {
      img: "images2/fruit popsicles.jpg",
      itemName: "Fruit Popsicles",
      price: "$3",
      description: "Refreshing fruit-flavored popsicles",
    },
    Gelato: {
      img: "images2/vanilla gellato.jpg",
      itemName: "Vanilla Gelato",
      price: "$5",
      description: "Creamy Italian vanilla gelato",
    },
  },
  "Cooking Oils": {
    "Olive Oil": {
      img: "images2/olive oil.jpg",
      itemName: "Extra Virgin Olive Oil",
      price: "$5",
      description: "Premium extra virgin olive oil",
    },
    "Canola Oil": {
      img: "images2/canola oil.jpg",
      itemName: "Canola Oil",
      price: "$3",
      description: "Light and versatile canola oil",
    },
    "Coconut Oil": {
      img: "images2/cocunut oil.jpg",
      itemName: "Coconut Oil",
      price: "$4",
      description: "Rich and fragrant coconut oil",
    },
    "Vegetable Oil": {
      img: "images2/sesame oil.jpg",
      itemName: "Vegetable Oil",
      price: "$2.5",
      description: "All-purpose vegetable oil",
    },
    "Sesame Oil": {
      img: "images2/seasame oil1.jpg",
      itemName: "Sesame Oil",
      price: "$4.5",
      description: "Nutty and flavorful sesame oil",
    },
  },
  "Sauces & Dressings": {
    Ranch: {
      img: "images2/ranch dressing.jpg",
      itemName: "Ranch Dressing",
      price: "$3",
      description: "Creamy and tangy ranch dressing",
    },
    Vinaigrette: {
      img: "images2/balsamic gressing.jpg",
      itemName: "Balsamic Vinaigrette",
      price: "$3.5",
      description: "Sweet and tangy balsamic vinaigrette",
    },
    Italian: {
      img: "images2/italian dressing.jpg",
      itemName: "Italian Dressing",
      price: "$2.5",
      description: "Herb-infused Italian dressing",
    },
    "Thousand Island": {
      img: "images2/thousand island dressing.jpg",
      itemName: "Thousand Island Dressing",
      price: "$3",
      description: "Sweet and tangy thousand island dressing",
    },
    Caesar: {
      img: "images2/caeser dressing.jpg",
      itemName: "Caesar Dressing",
      price: "$3.5",
      description: "Creamy Caesar dressing",
    },
  },
};

var main = document.querySelector("#main");
var brand = document.querySelector("#brand");
var country = document.querySelector("#country");

brand.innerHTML = `<option value="">Select brand</option>`;
country.innerHTML = `<option value="">Select country name</option>`;

for (var key in makeupProduct) {
  brand.innerHTML += `<option value="${key}">${key}</option>`;
  for (var key1 in makeupProduct[key]) {
    var obj = makeupProduct[key][key1];
    main.innerHTML += `
          <div class="card text-center card-custom" style="width: 18rem;">
            <img src="${obj.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${obj.itemName}</h5>
              <p class="card-text">${obj.description}</p>
              <a href="#" class="btn btn-success">${obj.price}</a>
              <input type="color" class="color-picker" onchange="changeCardBackgroundColor(event)" title="Pick a color">
            </div>
          </div>`;
  }
}

function setCountry() {
  country.innerHTML = `<option value="">Select country name</option>`;
  for (var key in makeupProduct[brand.value]) {
    country.innerHTML += `<option value="${key}">${key}</option>`;
  }
}

var selectedCard = document.getElementById("selectedCard");
function searchProduct() {
  var userVal = makeupProduct[brand.value][country.value];
  selectedCard.innerHTML = `
      <div class="card text-center card-custom" style="width: 18rem;">
        <img src="${userVal.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${userVal.itemName}</h5>
          <p class="card-text">${userVal.description}</p>
          <a href="#" class="btn btn-primary">${userVal.price}</a>
          <input type="color" class="color-picker" onchange="changeCardBackgroundColor(event)" title="Pick a color">
        </div>
      </div>`;
  selectedCard.style.display = "block";
  main.style.display = "none";
}

function clearProduct() {
  selectedCard.style.display = "none";
  main.style.display = "flex";
}

function changeCardBackgroundColor(event) {
  var colorPicker = event.target;
  var card = colorPicker.closest(".card-custom");
  card.style.backgroundColor = colorPicker.value;
}
