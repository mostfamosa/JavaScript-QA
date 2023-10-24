//Read over it, then complete the makeDrink method so that it:
// * Only allows you make a drink if it’s a drink in the drinkRequirements object.
//   Otherwise alert: "Sorry, we don’t make "
// * Reduces the beans count according to the drinkRequirements object
//   and the given drinkType
// * Alerts “Sorry, we’re all out of beans!” if there are not enough beans
//   to make that drink


const coffeeShop = {
    beans: 40,
    beanCost: 1,
    money: 100,
    buyBeans: function (numBeans) {
        if (this.money >= (numBeans * this.beanCost)) {
            this.beans += numBeans
            this.money -= numBeans * this.beanCost
        }
        else {
            console.log("Sorry, we can't buy more beans")
        }

    },
    drinkRequirements: {
        latte: { beanRequirement: 10, price: 5 },
        americano: { beanRequirement: 5, price: 5 },
        doubleShot: { beanRequirement: 15, price: 5 },
        frenchPress: { beanRequirement: 12, price: 5 }
    },

    makeDrink: function (drinkType) {
        if (this.drinkRequirements[drinkType]) {
            if (this.beans >= this.drinkRequirements[drinkType].beanRequirement) {
                this.beans -= this.drinkRequirements[drinkType].beanRequirement
                return true
            }
            else {
                console.log("Sorry, we're all out of beans")
                return false
            }
        }
        else {
            console.log("Sorry, we don’t make " + drinkType)
            return false
        }
    },
    buyDrink: function (drinkType) {
        if (this.makeDrink(drinkType)) {
            this.money += this.drinkRequirements[drinkType].price
        }
    }
}
console.log("number of beans: "+coffeeShop.beans)
console.log("money : "+coffeeShop.money)

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

console.log("number of beans: "+coffeeShop.beans)
console.log("money : "+coffeeShop.money)

coffeeShop.buyBeans(20)

console.log("number of beans: "+coffeeShop.beans)
console.log("money : "+coffeeShop.money)

coffeeShop.buyDrink("latte")
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("filtered");

console.log("number of beans: "+coffeeShop.beans)
console.log("money : "+coffeeShop.money)