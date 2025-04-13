const appetizerList = 
  {heading: "Appetizers",
   content: [
    {item: "Nachos",
     price: 10, 
     description: "Classic style carne asada nachos with pico de gallo, sour cream, cilantro, and guacamole.",
    },
    {item: "Hot Wings",
      price: 10, 
      description: "Buffalo-style wings with a side of celery and ranch",
    },
    {item: "Dirty Fries",
      price: 10, 
      description: "Plate of fries topped with bacon bits, cheese, peppers, cilantro, garlic aioli and a touch of cajun seasoning.",
    },
    {item: "Jalapeño Poppers",
      price: 10, 
      description: "Basket of jalapeño poppers with side of Ed's homemade queso dip.",
     },
   ]
  };

const burgerList = 
  {heading: "Burgers",
   content: [
    {item: "Classic Burger",
     price: 20, 
     description: "The classic american burger Lalo and Ed grew up with. Comes with lettuce, tomato, oniions, pickles, mayo, ketchup and mustard. Toppings can be excluded at request (but we'll look at you funny).",
    },
    {item: "Classic Cheeseburger",
      price: 20, 
      description: "Classic burger. With cheese.",
     },
     {item: "Hot Out West",
      price: 20, 
      description: "Burger topped with pepper jack cheese, bacon, jalapeños, onion rings, and spicy chipotle sauce.",
     },
     {item: "BBQ (Barbecue Bacon Queen)",
      price: 20, 
      description: "Double-stacked white cheddar cheeseburger patties with extra bacon, onion rings, and sweet barbecue sauce. Bring the baby wipes.",
     },
     {item: "Vegan Burger",
      price: 20, 
      description: "We made the impossible possible: a tasty vegan burger. Classic burger with an impossible burger patty.",
     },
   ],
   comment: "All burgers come with a side of fries. Extra patties can be added for $4 each. For $2 each, the additional add-ons can be added to any burger: bacon, avocado, extra cheese, cameralized onions, and Lalo and Ed's top-secret award-winning undeniably-irresistible burger sauce."
  };

const nonburgerList = 
  {heading: "Not Burgers",
   content: [
    {item: "Pizza",
     price: 25, 
     description: "14 inch pizza, serves four people. Cheese, pepperoni, or supreme options available. Ed promises not to burn it this time.",
    },
    {item: "Quesadilla",
      price: 18, 
      description: "Seasoned carne asada quesadilla with extra gooey cheese. Sides of pico de gallo, lettuce, sour cream, and avocado available at request.",
     },
     {item: "Hot Chicken Sandwich",
      price: 18, 
      description: "Lalo's family-recipe hot chicken sandwich. Comes with side of fries.",
     },
     {item: "Extra BLT",
      price: 18, 
      description: "BACON. BACON. BACON. And lettuce and tomato too, I guess. Comes with side of fries.",
     },
     {item: "House Salad",
      price: 15, 
      description: "",
     },
   ]
  };

const drinkList = 
  {heading: "Drinks",
   content: [
    {item: "Sparkling Water",
     price: 4, 
     description: "Liquid Death, Perrier, or LaCroix.",
    },
    {item: "Soda",
      price: 4, 
      description: "Coke, Diet Coke, Dr. Pepper, Sprite, or Orange Fanta.",
     },
     {item: "Lemonade",
      price: 4, 
      description: "Regular lemonade, pink lemonade, or Ed's homemade sweet watermelon lemonade.",
     },
     {item: "Craft Beer",
      price: 12, 
      description: "Pint of craft beer. Refer to bar for available options.",
     },
     {item: "Domestic Beer",
      price: 9, 
      description: "Pint of domestic beer. Refer to bar for available options.",
     },
     {item: "Import beer",
      price: 12, 
      description: "Pint of import beer. Refer to bar for available options.",
     },
   ]
  };

// take all section list objects and export an array of list sections
const menuList = [appetizerList, burgerList, nonburgerList, drinkList];

export {menuList};