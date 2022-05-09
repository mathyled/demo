/* Construya una clase Portfolio (conjunto de inversiones) simple que contenga una colección de Stocks (opciones de bolsa) y un método Profit (ganancia) que reciba dos fechas y devuelva la ganancia del Portafolio entre esas dos fechas. Se asume que cada Stock tiene un método 'Price' (precio) que recibe una fecha y retorna su precio. Extra: haz que el método 'Profit' retorne el "retorno anualizado" del portafolio entre la fechas dadas */

class Portfolio {
    constructor() {
        this.stocks = []
    }
    addStock(stock) {
        this.stocks.push(stock)
    }
    profit(startDate, endDate) {
        let profit = 0
        for (let i = 0; i < this.stocks.length; i++) {
            profit += this.stocks[i].price(startDate) - this.stocks[i].price(endDate)
        }
        return profit
    }
}

class Stock {
    constructor(name) {
        this.name = name
        this.price = this.price.bind(this)
    }
    price(date) {
        return Math.random() * 100
    }
}

const tsla = new Stock('TSLA')
const mathias = new Portfolio()
mathias.addStock(tsla)
console.log(mathias.profit('01/01/2019', '01/02/2019'))
console.table(mathias)