const shoppingCart = {
    items: [],
    total: 0,
    addItem(name, price, quantity) {
        const item = {};
        item.name = name;
        item.price = price;
        item.quantity = quantity;
        this.items.push(item);
        this.total += price * quantity;
    },
    removeItem(nameObj) {
        for (const item of this.items) {
            if (nameObj === item.name) {
                const numberItem = this.items.indexOf(item);
                delete this.items[numberItem];
                const totalPriceItem = item.price * item.quantity;
                shoppingCart.total -= totalPriceItem;
            } else {
                return false;
            }
        }
    },
    updateQuantity(nameObj, newQuantity) {
        for (const item of this.items) {
            if (nameObj === item.name) {
                const totalPriceItem = item.price * item.quantity;
                const newTotalPrice = (item.price * newQuantity) - totalPriceItem;
                this.total -= totalPriceItem;
                this.total += newTotalPrice;
                item.quantity = newQuantity;
            } else {
                return false;
            }
        }
    },
    calculateTotal() {
        let result = 0;
        for (const item of this.items) {
            result += item.price;
        }
        return result;
    },
    clearCart() {
        for (const item of this.items) {
                this.items = [];
                this.total = 0;
        }
    }
}
