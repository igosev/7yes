const createCart = () => {
  const cartInit = [
    {
      name: "Candle in concrete bowl",
      link: "./",
      image: "01",
      qty: 2,
      price: 11.00,
      oldPrice: 15.00,
      color: "Gray night",
      weight: "140g"
    },
    {
      name: "Exquisite glass vase",
      link: "./",
      image: "02",
      price: 23.00,
      qty: 1
    },
    {
      name: "Set for a dinner party of 7 items",
      link: "./",
      image: "03",
      price: 47.00,
      qty: 1
    }
  ];

  const cartSaved = JSON.parse(localStorage.getItem("cart")) || cartInit;
  const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(items));
  }

  const removeItem = (index) => {
    items.splice(index, 1);
    saveCart();
  }

  let items = $state(cartSaved)

  return {
    get items() {
      return items;
    },

    get sum(){
      let sum = 0;

      items.forEach(item => {
        sum += item.qty * item.price;
      })

      return {
        subtotal: sum,
        taxes: sum * 8.7 / 100
      }
    },

    get quantity () {
      return items.reduce((n, {qty}) => n + qty, 0);
    },

    increaseItemQuantity: (index) => {
      const nextQty = items[index].qty + 1;
      if(nextQty <= 10) {
        items[index].qty = nextQty;
        saveCart();
      }
    },

    decreaseItemQuantity: (index) => {
      const nextQty = items[index].qty - 1;
      if(nextQty > 0) {
        items[index].qty = nextQty;
      }else{
        removeItem(index)
      }
      saveCart();
    },

    removeItem: (index) => removeItem(index),

    reset: () => {
      items = cartInit;
      saveCart();
    }
  }
}

export const cart = createCart();