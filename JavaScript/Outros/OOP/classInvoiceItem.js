/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price._
*/

class InvoiceItem {
    constructor(quantity, price) {
        this._id = Date.now()
        this._description = null
        this._quantity = quantity
        this._price = price
    }
    get id() {
        return this._id
    }
    set description(value) {
        this._description = value
    }

    get description() {
        return this._description
    }


    get quantity() {
        return this._quantity
    }
    set quantity(value) {
        this._quantity = value
    }
    get price() {
        return this._price
    }
    set price(value) {
        this._price = value
    }
    getTotal() {
        return this._price * this._quantity
    }
    toString() {
        return `InvoiceItem[id=${this.id},description=${this.description}, quantity=${this.quantity} price=${this.price}]`
    }

}

const a = new InvoiceItem(12, 1322)
a.price = 3000
console.log(a.toString())