export class PriceService1 {
    
    constructor() { }

    calculateTotalPrice(basePrice: number, state: string) {
        // e.g. Imgine that in our "real" application we're
        // accessing a real database of state sales tax amounts
        const tax = Math.random();

        return basePrice + tax;
    }
}
