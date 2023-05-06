const pizzas = [
  {
    name: "Chicken Biryani",
    variants: ["Full", "Half"],
    prices: [
      {
        Full: 140,
        Half: 80
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
  {
    name: "Garam Chai ki Pyali",
    variants: ["Full", "Cutting", "Machine"],
    prices: [
      {
        "Full": 15,
        "Cutting": 10,
        "Machine": 8,
      },
    ],
    category: "beverage",
    image:
      "https://static.toiimg.com/thumb/74331975.cms?width=1200&height=900",
    description: "A hot cup of tea and one biscuit from our side",
  },
];

export default pizzas