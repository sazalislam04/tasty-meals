import { getData } from "../fakeDb/localStorage";

export const foodLoaders = async () => {
  const foodsData = await fetch("http://localhost:5000/t-meals");
  const foods = await foodsData.json();

  const storedCart = getData();
  let prevCart = [];
  for (const id in storedCart) {
    const addedCart = foods.find((food) => food._id === id);
    if (addedCart) {
      addedCart.quantity = storedCart[id];
      prevCart.push(addedCart);
    }
  }

  return { foods, prevCart };
};
