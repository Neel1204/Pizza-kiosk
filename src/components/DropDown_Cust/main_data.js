import { makeAutoObservable, toJS } from "mobx";

class MainData {
  constructor() {
    makeAutoObservable(this);
  }
  options = [
    {
      id: 1,
      type: "Size",
    },
    {
      id: 2,
      type: "Sauce and Cheese",
    },
    {
      id: 3,
      type: "Veg Toppings",
    },
    {
      id: 4,
      type: "Meat Toppings",
    },
    {
      id: 5,
      type: "Extra Flavour",
    },
  ];
  dataset = [
    {
      id: 1,
      type: "Sizes",
      details: [
        {
          name: "Small",
          price: 12.0,
          quantity: 0,
        },
        {
          name: "Medium",
          price: 16.0,
          quantity: 0,
        },
        {
          name: "Large",
          price: 20.0,
          quantity: 0,
        },
        {
          name: "X-Large",
          price: 24.0,
          quantity: 0,
        },
      ],
    },
    {
      id: 2,
      type: "Sauce and Cheese",
      details: [
        {
          name: "Tomato Sauce",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Garlic & Mayo Sauce",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Red Chili Sauce",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Cheddar Cheese",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Boccochini Cheese",
          price: 1.5,
          quantity: 0,
        },
      ],
    },
    {
      id: 3,
      type: "Veg Toppings",
      details: [
        {
          name: "Brocollie",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Green Olives",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Bruschetta",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Hot Banana",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Mushrooms",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Green Pappers",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Herb And Garlic",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Plant Based Pepperoni",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Jalepeno Pappers",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Red Onions",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Sun Dried Tomatoes",
          price: 2.0,
          quantity: 0,
        },
      ],
    },
    {
      id: 4,
      type: "Meat Topppings",
      details: [
        {
          name: "Salami Genoa",
          price: 3.0,
          quantity: 0,
        },
        {
          name: "Salami",
          price: 3.0,
          quantity: 0,
        },
        {
          name: "Pizzeria Pepperoni",
          price: 3.0,
          quantity: 0,
        },
        {
          name: "Turkey Pepperoni",
          price: 3.0,
          quantity: 0,
        },
        {
          name: "Black Forest Ham",
          price: 3.0,
          quantity: 0,
        },
      ],
    },
    {
      id: 5,
      type: "Dips",
      details: [
        {
          name: "Jalapeno",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Ranch",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Garlic Mayo",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Mayo",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "hot chilli",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Barbeque",
          price: 1.5,
          quantity: 0,
        },
      ],
    },
  ];
}
export const dataClass = MainData;
window.toJS = toJS;
