const restaurentData = [
  {
    info: {
      id: "238086",
      name: "Chinese chef co",
      cloudinaryImageId: "vgg06be2a0varwpmij7w",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Fast Food", "Asian"],
      avgRating: 3.7,
      promoted: true,
      sla: { deliveryTime: 53, slaString: "53 mins" },
      offers: ["₹125 OFF on orders above ₹249"],
      menuCategories: [
        {
          title: "Recommended",
          id: "1",
          type: "CATEGORY_TYPE_RECOMMENDED",
          itemCards: [
            {
              id: "101",
              name: "Veg Hakka Noodles",
              price: 180,
              desc: "Stir-fried noodles tossed with vegetables and sauces."
            },
            {
              id: "107",
              name: "Chilli Paneer",
              price: 220,
              desc: "Crispy paneer cubes cooked in spicy chilli garlic sauce."
            }
          ]
        },
        {
          title: "Starters",
          id: "2",
          itemCards: [
            {
              id: "105",
              name: "Spring Rolls",
              price: 150,
              desc: "Crispy rolls filled with seasoned vegetables."
            },
            {
              id: "106",
              name: "Crispy Corn",
              price: 160,
              desc: "Golden fried corn tossed with mild spices."
            },
            {
              id: "102",
              name: "Veg Manchurian",
              price: 200,
              desc: "Vegetable balls cooked in tangy Manchurian gravy."
            }
          ]
        },
        {
          title: "Noodles",
          id: "3",
          itemCards: [
            {
              id: "101",
              name: "Veg Hakka Noodles",
              price: 180,
              desc: "Classic hakka noodles with fresh vegetables."
            },
            {
              id: "108",
              name: "Paneer Noodles",
              price: 210,
              desc: "Noodles tossed with paneer and Chinese spices."
            },
            {
              id: "110",
              name: "Garlic Noodles",
              price: 195,
              desc: "Noodles cooked with garlic and soy sauce."
            }
          ]
        },
        {
          title: "Rice",
          id: "4",
          itemCards: [
            {
              id: "103",
              name: "Veg Fried Rice",
              price: 170,
              desc: "Fried rice cooked with vegetables and seasoning."
            },
            {
              id: "104",
              name: "Schezwan Rice",
              price: 190,
              desc: "Spicy rice tossed in Schezwan sauce."
            }
          ]
        },
        {
          title: "Soups",
          id: "5",
          itemCards: [
            {
              id: "109",
              name: "Veg Manchow Soup",
              price: 130,
              desc: "Hot and spicy vegetable soup."
            }
          ]
        }
      ],
      menu: [
        { id: "101", name: "Veg Hakka Noodles", price: 180 },
        { id: "102", name: "Veg Manchurian", price: 200 },
        { id: "103", name: "Veg Fried Rice", price: 170 },
        { id: "104", name: "Schezwan Rice", price: 190 },
        { id: "105", name: "Spring Rolls", price: 150 },
        { id: "106", name: "Crispy Corn", price: 160 },
        { id: "107", name: "Chilli Paneer", price: 220 },
        { id: "108", name: "Paneer Noodles", price: 210 },
        { id: "109", name: "Veg Manchow Soup", price: 130 },
        { id: "110", name: "Garlic Noodles", price: 195 }
      ]
    }
  },

  {
    info: {
      id: "220133",
      name: "Blue dragon chinese katta",
      cloudinaryImageId: "mghsabzobwhg3sbck4bp",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese"],
      avgRating: 4.3,
      promoted: true,
      sla: { deliveryTime: 43, slaString: "43 mins" },
      offers: ["Free Delivery above ₹199"],
      menuCategories: [
        {
          title: "Recommended",
          id: "1",
          type: "CATEGORY_TYPE_RECOMMENDED",
          itemCards: [
            {
              id: "204",
              name: "Chilli Chicken",
              price: 260,
              desc: "Juicy chicken tossed in spicy Indo-Chinese sauce."
            },
            {
              id: "209",
              name: "Chicken Lollipop",
              price: 280,
              desc: "Crispy fried chicken wings served hot."
            }
          ]
        },
        {
          title: "Starters",
          id: "2",
          itemCards: [
            {
              id: "203",
              name: "Chicken Manchurian",
              price: 240,
              desc: "Chicken cooked in thick Manchurian gravy."
            },
            {
              id: "206",
              name: "Chicken Spring Rolls",
              price: 190,
              desc: "Crunchy rolls filled with seasoned chicken."
            },
            {
              id: "210",
              name: "Chicken Momos",
              price: 200,
              desc: "Steamed dumplings stuffed with chicken."
            }
          ]
        },
        {
          title: "Rice & Noodles",
          id: "3",
          itemCards: [
            {
              id: "201",
              name: "Chicken Noodles",
              price: 220,
              desc: "Stir-fried noodles with chicken."
            },
            {
              id: "202",
              name: "Egg Fried Rice",
              price: 180,
              desc: "Fried rice cooked with eggs."
            },
            {
              id: "208",
              name: "Chicken Schezwan Rice",
              price: 230,
              desc: "Spicy rice tossed with chicken."
            }
          ]
        },
        {
          title: "Soups",
          id: "4",
          itemCards: [
            {
              id: "205",
              name: "Chicken Soup",
              price: 150,
              desc: "Warm and comforting chicken soup."
            }
          ]
        }
      ],
      menu: [
        { id: "201", name: "Chicken Noodles", price: 220 },
        { id: "202", name: "Egg Fried Rice", price: 180 },
        { id: "203", name: "Chicken Manchurian", price: 240 },
        { id: "204", name: "Chilli Chicken", price: 260 },
        { id: "205", name: "Chicken Soup", price: 150 },
        { id: "206", name: "Chicken Spring Rolls", price: 190 },
        { id: "207", name: "Garlic Chicken", price: 270 },
        { id: "208", name: "Chicken Schezwan Rice", price: 230 },
        { id: "209", name: "Chicken Lollipop", price: 280 },
        { id: "210", name: "Chicken Momos", price: 200 }
      ]
    }
  },

  {
    info: {
      id: "482340",
      name: "Ching's Essence",
      cloudinaryImageId: "v0lc5djb1ouyci5y3sqv",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Chinese"],
      avgRating: 4.1,
      sla: { deliveryTime: 46, slaString: "46 mins" },
      offers: ["10% OFF on orders above ₹299"],
      menuCategories: [
        {
          title: "Recommended",
          id: "1",
          itemCards: [
            {
              id: "308",
              name: "Paneer Butter Masala",
              price: 260,
              desc: "Paneer cubes cooked in rich buttery tomato gravy."
            }
          ]
        },
        {
          title: "Breads",
          id: "2",
          itemCards: [
            {
              id: "306",
              name: "Butter Roti",
              price: 35,
              desc: "Soft wheat roti topped with butter."
            }
          ]
        },
        {
          title: "Rice",
          id: "3",
          itemCards: [
            {
              id: "301",
              name: "Paneer Fried Rice",
              price: 190,
              desc: "Fried rice tossed with paneer and spices."
            },
            {
              id: "305",
              name: "Jeera Rice",
              price: 160,
              desc: "Steamed rice tempered with cumin."
            },
            {
              id: "309",
              name: "Veg Schezwan Rice",
              price: 200,
              desc: "Spicy rice cooked in Schezwan sauce."
            },
            {
              id: "310",
              name: "Plain Rice",
              price: 140,
              desc: "Simple steamed basmati rice."
            }
          ]
        },
        {
          title: "Main Course",
          id: "4",
          itemCards: [
            {
              id: "303",
              name: "Paneer Chilli",
              price: 220,
              desc: "Paneer tossed in spicy chilli sauce."
            },
            {
              id: "304",
              name: "Dal Fry",
              price: 180,
              desc: "Yellow dal cooked with Indian spices."
            }
          ]
        }
      ],
      menu: [
        { id: "301", name: "Paneer Fried Rice", price: 190 },
        { id: "302", name: "Veg Noodles", price: 170 },
        { id: "303", name: "Paneer Chilli", price: 220 },
        { id: "304", name: "Dal Fry", price: 180 },
        { id: "305", name: "Jeera Rice", price: 160 },
        { id: "306", name: "Butter Roti", price: 35 },
        { id: "307", name: "Veg Manchow Soup", price: 130 },
        { id: "308", name: "Paneer Butter Masala", price: 260 },
        { id: "309", name: "Veg Schezwan Rice", price: 200 },
        { id: "310", name: "Plain Rice", price: 140 }
      ]
    }
  },

  {
    info: {
      id: "464690",
      name: "Lallantop Dhaba Bar",
      cloudinaryImageId: "do5fnhlhauhyez64ci44",
      costForTwo: "₹800 for two",
      cuisines: ["Tandoor", "Pastas", "Pizzas"],
      avgRating: 3.8,
      sla: { deliveryTime: 45, slaString: "45 mins" },
      offers: ["20% OFF up to ₹100"],
      menuCategories: [
        {
          title: "Starters",
          id: "1",
          itemCards: [
            {
              id: "401",
              name: "Paneer Tikka",
              price: 320,
              desc: "Grilled paneer cubes marinated in tandoori spices."
            },
            {
              id: "406",
              name: "Chicken Tikka",
              price: 380,
              desc: "Juicy chicken pieces grilled in tandoor."
            }
          ]
        },
        {
          title: "Main Course",
          id: "2",
          itemCards: [
            {
              id: "402",
              name: "Butter Chicken",
              price: 420,
              desc: "Chicken cooked in rich buttery tomato gravy."
            },
            {
              id: "403",
              name: "Dal Makhani",
              price: 260,
              desc: "Slow cooked black dal with butter."
            },
            {
              id: "409",
              name: "Paneer Butter Masala",
              price: 280,
              desc: "Paneer in creamy tomato-based gravy."
            }
          ]
        },
        {
          title: "Breads & Rice",
          id: "3",
          itemCards: [
            {
              id: "404",
              name: "Butter Naan",
              price: 60,
              desc: "Soft naan brushed with butter."
            },
            {
              id: "405",
              name: "Tandoori Roti",
              price: 40,
              desc: "Whole wheat roti cooked in tandoor."
            },
            {
              id: "408",
              name: "Jeera Rice",
              price: 180,
              desc: "Steamed rice flavored with cumin."
            }
          ]
        },
        {
          title: "Desserts",
          id: "4",
          itemCards: [
            {
              id: "410",
              name: "Gulab Jamun",
              price: 120,
              desc: "Soft milk-solid dumplings soaked in sugar syrup."
            }
          ]
        }
      ],
      menu: [
        { id: "401", name: "Paneer Tikka", price: 320 },
        { id: "402", name: "Butter Chicken", price: 420 },
        { id: "403", name: "Dal Makhani", price: 260 },
        { id: "404", name: "Butter Naan", price: 60 },
        { id: "405", name: "Tandoori Roti", price: 40 },
        { id: "406", name: "Chicken Tikka", price: 380 },
        { id: "407", name: "Veg Kolhapuri", price: 240 },
        { id: "408", name: "Jeera Rice", price: 180 },
        { id: "409", name: "Paneer Butter Masala", price: 280 },
        { id: "410", name: "Gulab Jamun", price: 120 }
      ]
    }
  },

  {
    info: {
      id: "47314",
      name: "Raje Chinese",
      cloudinaryImageId: "sawoh1eafncswhitstsb",
      costForTwo: "₹400 for two",
      cuisines: ["Chinese"],
      avgRating: 4,
      sla: { deliveryTime: 34, slaString: "34 mins" },
      offers: ["Flat ₹50 OFF"],
      menuCategories: [
        {
          title: "Starters",
          id: "1",
          itemCards: [
            {
              id: "503",
              name: "Veg Manchurian",
              price: 190,
              desc: "Veg balls cooked in spicy Manchurian sauce."
            },
            {
              id: "506",
              name: "Veg Spring Rolls",
              price: 160,
              desc: "Crispy rolls stuffed with vegetables."
            },
            {
              id: "509",
              name: "Chicken Lollipop",
              price: 290,
              desc: "Deep fried chicken wings served with sauce."
            }
          ]
        },
        {
          title: "Rice & Noodles",
          id: "2",
          itemCards: [
            {
              id: "501",
              name: "Egg Noodles",
              price: 200,
              desc: "Noodles tossed with eggs and seasoning."
            },
            {
              id: "502",
              name: "Chicken Fried Rice",
              price: 230,
              desc: "Fried rice cooked with chicken pieces."
            },
            {
              id: "507",
              name: "Chicken Schezwan Noodles",
              price: 240,
              desc: "Spicy noodles tossed with chicken."
            }
          ]
        },
        {
          title: "Soups",
          id: "3",
          itemCards: [
            {
              id: "508",
              name: "Chicken Soup",
              price: 150,
              desc: "Hot and comforting chicken soup."
            }
          ]
        }
      ],
      menu: [
        { id: "501", name: "Egg Noodles", price: 200 },
        { id: "502", name: "Chicken Fried Rice", price: 230 },
        { id: "503", name: "Veg Manchurian", price: 190 },
        { id: "504", name: "Chicken Manchurian", price: 260 },
        { id: "505", name: "Chilli Chicken", price: 270 },
        { id: "506", name: "Veg Spring Rolls", price: 160 },
        { id: "507", name: "Chicken Schezwan Noodles", price: 240 },
        { id: "508", name: "Chicken Soup", price: 150 },
        { id: "509", name: "Chicken Lollipop", price: 290 },
        { id: "510", name: "Chicken Momos", price: 210 }
      ]
    }
  },

  {
    info: {
      id: "228565",
      name: "Subhanallah Biryani House",
      cloudinaryImageId: "kvznqnzyop4voh5jryfq",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "Chinese", "North Indian", "Mughlai", "Beverages"],
      avgRating: 3.7,
      sla: { deliveryTime: 28, slaString: "28 mins" },
      offers: ["20% OFF up to ₹50"],
      menuCategories: [
        {
          title: "Biryani",
          id: "1",
          itemCards: [
            {
              id: "601",
              name: "Chicken Biryani",
              price: 250,
              desc: "Aromatic basmati rice cooked with spiced chicken."
            },
            {
              id: "602",
              name: "Veg Biryani",
              price: 180,
              desc: "Flavorful rice cooked with mixed vegetables."
            }
          ]
        },
        {
          title: "Main Course",
          id: "2",
          itemCards: [
            {
              id: "605",
              name: "Chicken Kebab",
              price: 260,
              desc: "Juicy chicken kebabs grilled to perfection."
            },
            {
              id: "606",
              name: "Chicken Curry",
              price: 240,
              desc: "Chicken cooked in traditional Indian gravy."
            },
            {
              id: "608",
              name: "Dal Tadka",
              price: 180,
              desc: "Yellow dal tempered with spices."
            }
          ]
        },
        {
          title: "Breads & Rice",
          id: "3",
          itemCards: [
            {
              id: "607",
              name: "Butter Roti",
              price: 35,
              desc: "Soft roti topped with butter."
            },
            {
              id: "603",
              name: "Chicken Fried Rice",
              price: 220,
              desc: "Fried rice cooked with chicken."
            }
          ]
        },
        {
          title: "Beverages",
          id: "4",
          itemCards: [
            {
              id: "610",
              name: "Sweet Lassi",
              price: 90,
              desc: "Chilled sweet yogurt-based drink."
            }
          ]
        }
      ],
      menu: [
        { id: "601", name: "Chicken Biryani", price: 250 },
        { id: "602", name: "Veg Biryani", price: 180 },
        { id: "603", name: "Chicken Fried Rice", price: 220 },
        { id: "604", name: "Egg Fried Rice", price: 200 },
        { id: "605", name: "Chicken Kebab", price: 260 },
        { id: "606", name: "Chicken Curry", price: 240 },
        { id: "607", name: "Butter Roti", price: 35 },
        { id: "608", name: "Dal Tadka", price: 180 },
        { id: "609", name: "Chicken Manchurian", price: 260 },
        { id: "610", name: "Sweet Lassi", price: 90 }
      ]
    }
  },

  {
    info: {
      id: "229286",
      name: "Mandarin Oak- The Heavenly Chinese",
      cloudinaryImageId: "f73a4f3de059966f925d587cca28e17c",
      costForTwo: "₹350 for two",
      cuisines: ["Chinese", "Oriental", "Pan-Asian", "Snacks"],
      avgRating: 4,
      sla: { deliveryTime: 28 },
      offers: ["Free Dessert on orders above ₹499"],
      menuCategories: [
        {
          title: "Dimsums & Starters",
          id: "1",
          itemCards: [
            {
              id: "701",
              name: "Veg Dimsums",
              price: 210,
              desc: "Steamed dumplings filled with vegetables."
            },
            {
              id: "702",
              name: "Chicken Dimsums",
              price: 240,
              desc: "Soft dumplings stuffed with minced chicken."
            },
            {
              id: "706",
              name: "Crispy Lotus Stem",
              price: 220,
              desc: "Crispy fried lotus stem tossed in spices."
            }
          ]
        },
        {
          title: "Main Course",
          id: "2",
          itemCards: [
            {
              id: "703",
              name: "Kung Pao Chicken",
              price: 280,
              desc: "Spicy stir-fried chicken with peanuts."
            },
            {
              id: "704",
              name: "Veg Pad Thai",
              price: 260,
              desc: "Thai-style noodles tossed with vegetables."
            },
            {
              id: "705",
              name: "Chicken Pad Thai",
              price: 290,
              desc: "Thai noodles cooked with chicken."
            }
          ]
        },
        {
          title: "Rice & Soups",
          id: "3",
          itemCards: [
            {
              id: "707",
              name: "Veg Fried Rice",
              price: 190,
              desc: "Fried rice cooked with vegetables."
            },
            {
              id: "708",
              name: "Chicken Fried Rice",
              price: 230,
              desc: "Fried rice cooked with chicken."
            },
            {
              id: "709",
              name: "Hot & Sour Soup",
              price: 160,
              desc: "Spicy and tangy soup with vegetables."
            }
          ]
        },
        {
          title: "Desserts",
          id: "4",
          itemCards: [
            {
              id: "710",
              name: "Chocolate Brownie",
              price: 140,
              desc: "Soft chocolate brownie served warm."
            }
          ]
        }
      ],
      menu: [
        { id: "701", name: "Veg Dimsums", price: 210 },
        { id: "702", name: "Chicken Dimsums", price: 240 },
        { id: "703", name: "Kung Pao Chicken", price: 280 },
        { id: "704", name: "Veg Pad Thai", price: 260 },
        { id: "705", name: "Chicken Pad Thai", price: 290 },
        { id: "706", name: "Crispy Lotus Stem", price: 220 },
        { id: "707", name: "Veg Fried Rice", price: 190 },
        { id: "708", name: "Chicken Fried Rice", price: 230 },
        { id: "709", name: "Hot & Sour Soup", price: 160 },
        { id: "710", name: "Chocolate Brownie", price: 140 }
      ]
    }
  }
];

export default restaurentData;
