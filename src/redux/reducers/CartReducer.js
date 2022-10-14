const initState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
//   totalQty: 0,
  totalPrice: 0,
};

// initState.items.forEach((item) => {
//   initState.totalPrice += item.course.price * item.qty;
//   console.log(item);
// //   initState.totalQty += item.qty;
// });

const CartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      let carts = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

      if (carts.length === 0) {
        let item = {
          id: action.payload.product.id,
          product: action.payload.product,
          price: action.payload.price,
        };
        carts.push(item);
      }
    //   state.totalQty += action.payload.qty;
      state.totalPrice += action.payload.price;
      console.log(action.payload)

      localStorage.setItem("cart", JSON.stringify(carts));
      let newData = {
        ...state.items,
        carts,
      };
      state.items = newData;

      return {
        ...state,
      };
    default:
      return state;
  }
};

export default CartReducer;
