import products from "../data/products"
import IProduct from "../model/product"

const ProductsList = () => {
    // We are returning a React-TSX function component == JSX
    return (
        <>
          <div id="products">
            { // Interpolation.
                // The reason why we are using a map function is 
                 products.map((p : IProduct) => (
                    <div className = "card mb-3">
                        <div className = "card-body">
                            <h4 className = "card-title">${p.productName}</h4>
                            <h4 className = "card-title">${p.price}</h4>
                            <h3 className = "card-title">${p.starRating}</h3>
                            <a href="#" className="edit card-link" data-id="${p.productId}">
                                <i className="fa fa-pencil"></i>
                            </a>
                            <a href="#" className="delete card-link" data-id="${p.productId}">
                                <i className="fa fa-remove"></i>
                            </a>
                        </div>
                    </div>
                 ))
            }
          </div>
        </>
    )
}

export default ProductsList;