var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(items) {
    var Obj = {}

    for( var i = 0; i<items.length;i++) {


      var item = items[i]

      Obj[item] = rndNum()
      
      cart.push(Obj)

      console.log(`${item} has been added to your cart.`)
    }

    return cart

    function rndNum () {
        return Math.floor(Math.random() * Math.floor(100))
    }
  }







function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
