import IProduct from "../model/product";

// We are exporting the data as the array of type IProduct.
export default [
    {
        "productName": "oneplus12",
        "price": 55000.5,
        "starRating": "4.8",
        "productId": 2,
        "productCode": "Oneplus",
        "productAvailable": "30-Mar-2023",
        "imageUrl": "https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg"
    },
    {
        "productName": "Oppo13",
        "price": 43545.5,
        "starRating": 4,
        "productId": 5,
        "productCode": "Oppo13",
        "productAvailable": "12-Jan-2022",
        "imageUrl": "https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg"
    },
    {
        "productName": "Nokia14",
        "price": 45677.5,
        "starRating": 5,
        "productId": 6,
        "productCode": "Nok1222",
        "productAvailable": "30-Nov-2022",
        "imageUrl": "https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg"
    }
] as IProduct[]