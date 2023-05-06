const pizzas = [
  {
    name: "Chicken Biryani",
    variants: ["half", "full"],
    prices: [
      {
        half: 80,
        full: 160,
      },
    ],
    category: "nonveg",
    image:
      "https://simmertoslimmer.com/wp-content/uploads/2018/01/South-Indian-chicken-biryani.jpg",
    description: "Chicken Biryani with 2 piece fried chicken",
  },
  {
    name: "Chicken Roll",
    variants: ["Without Cheese", "With Cheese"],
    prices: [
      {
        "Without Cheese": 80,
        "With Cheese": 100,
      },
    ],
    category: "nonveg",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/gepq1hs7ik070udosrbp",
    description: "Chicken Roll with nutricious veggies and juicy chicken",
  },
];

export default pizzas