// user interface
function peshy(){
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
  
    // business logic
    if (email.length < 10) {
      alert("email invalid!");
    }
    if (name.length < 1 || name.length == 0) {
      alert("please enter full name!");
    }
    if (location.length < 1) {
      alert("Please enter a valid location");
    }
    if (email.length > 10  && name.length > 1 && location.length > 1) {
      alert("Dear" + name + " of email: " + email + " from " + location + " we have received your message!")
    }
  };
  
//   // User interface
  function Charge(size, crust, topping,delivery) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.delivery = delivery
    this.price = 0;
   }
   var totalPrice = [];
  
   var pizzaSizes = ["small", "medium", "large"];
   var crust = ["Crispy", "Stuffed", "Gluten-free"];
   var topping = ["Pepperoni", "Chicken", "Bacon", "Sausage", "Mushrooms"];
   var delivery = ["deliver", "dont-deliver"];
  
//   //  Business logic
//    Charge.prototype.totalPrice = function () {
//     if (this.size === pizzaSizes["small"]) {
//       this.price += 750;
//     } if (this.size === pizzaSizes["medium"]) {
//       this.price += 1000;
//     } else if (this.size === pizzaSizes["large"]) {
//       this.price += 1500;
//     }
//     if (this.crust === crust["Cripsy"]) {
//       this.price += 100;
//     } else if (this.crust === crust["Stuffed"]) {
//       this.price += 150;
//     } else if (this.crust === crust["Gluten-free"]) {
//       this.price += 200;
//     }
//     if (this.topping === topping["Pepperoni"]) {
//       this.price += 100;
//     } else if (this.topping === topping["Chicken"]) {
//       this.price += 200;
//     } else if (this.topping === topping["Bacon"]) {
//       this.price += 300;
//     } else if (this.topping === topping["Sausage"]) {
//       this.price += 50;
//     }else if (this.topping === topping["Mushrooms"]) {
//       this.price += 70;
//     }
//     if (this.delivery === delivery["dont-deliver"]) {
//       this.price += 0;
//     }else if (this.deliver === delivery["deliver"]) {
//       this.price += 200;
//     }
//     return this.price;
//   }
  
  
//   Charge.prototype.totalCost = function () {
//     var cartTotal = 0;
//     for (var shopping = 0; shopping <totalPrice.length; shopping ++) {
//       cartTotal +=totalPrice[shopping];
//     }
//     return cartTotal;
//    }
  
//    $(document).ready(function () {
//     $("input#cost").click(function (event) {
//       event.preventDefault();
//       var sizes = $("select#PizzaSizes").val();
//       var crusts = $("select#crust").val();
//       var toppings = $("select#toppings").val();
//       var deliver = $("select#deliver").val();
  
//       var newPrice = new Charge(sizes, crusts, toppings);
//       newPrice.totalPrice();
//       totalPrice.push(newPrice.price);
//       $("#a").text("pizza :" + sizes);
//       $("#b").text("crusts  :" + crusts);
//       $("#typ").text("toppings  :" + toppings);
//       $("#ty").text("deliver  :" + deliver);
//       $("#t").text("total cost  :" + newPrice.totalCost());
//     });
//    });