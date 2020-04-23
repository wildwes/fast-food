const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (combo) {
        this.orders.push(combo);
    },
    getOrders: function () {
        return this.orders;
    }
}

const chickenComboMeal = {
    comboType: "chicken sandwhich",

    fries: true,
    drinkSize: "medium"

}

const bisonBurgerCombo = {
    comboType: "Bison Burger",

    fries: true,

    drinkSize: "Large"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(bisonBurgerCombo)

// Invoke the function to return the list of all orders
const table = restaurant.getOrders();
// Output all orders to the console using console.table()
console.log(table);