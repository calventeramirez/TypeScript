import {Product, ivaCalculation, ivaCalculationOptions} from "./06-function-destructuring";


const shoppingCart: Product[] = [
    {
        description: "Samsung Galaxy S24",
        price: 1024
    },
    {
        description: "iPad Pro",
        price: 800
    }
];

const options: ivaCalculationOptions = {
    iva: 0.25,
    products: shoppingCart
};


//IVA = 0.25
const [total, iva] = ivaCalculation(options);

console.log("Total:", total, "IVA:", iva);
