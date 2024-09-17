
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Samsung Galaxy S24',
    price: 1024
}

const tablet: Product = {
    description: 'iPad Pro',
    price: 800
}

export interface ivaCalculationOptions {
    iva: number;
    products: Product[];
}

// function ivaCalculation(options: ivaCalculationOptions): [number, number] {
// function ivaCalculation({iva, products}: ivaCalculationOptions): [number, number] {
export function ivaCalculation(options: ivaCalculationOptions): [number, number] {

    let total = 0;
    const {iva, products} = options;
    
    products.forEach(({price})/* es lo mismo que poner producto y luego llamar abajo a product.price*/ => {
        total += price;
    });

    return [total, total * iva];
}

const shoppingCart = [phone, tablet];
const iva = 0.21;

const [total, ivaFinal] = ivaCalculation({
    products: shoppingCart,
    iva
});

// console.log("Total:",total, "IVA:", ivaFinal);




