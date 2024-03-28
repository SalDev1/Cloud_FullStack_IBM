// One way --> Declarating our own types.
export type ProductData = {
    productName: string,
    price: number,
    starRating: number,
    productId: number
    productCode: string
    productAvailable: string
    imageUrl: string
}

export type NewProductData = {
    productId : number,
    productName : string,
    price : number,
    starRating : number,
    imageUrl: string,
    productCode: string,
    productAvailable: string
}

export type SavedProductData = {
    productId : number,
}
