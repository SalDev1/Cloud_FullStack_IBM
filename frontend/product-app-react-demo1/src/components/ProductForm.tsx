const ProductForm = () => {
    return (
        <div className="card card-body card-form">
            <h1>Product Info</h1>
            <p className="lead">Product Info</p>
            <div className="form-group">
            <input type="text" id="productname" className="form-control" placeholder="Productname" />
            </div>
            <div className="form-group">
            <input type="text" id="price" className="form-control" placeholder="Price" />
            </div>
            <input type="hidden" id="id" value="" />
            <button className="product-submit btn btn-primary btn-block">Add Product</button>
            <span className="form-end"></span>
       </div>
    )
}
export default ProductForm