const ProductInfoCard = (props) => {
    const { data = {} } = props;
    return (
        <div className="products-info-card">

            <h3>{data.title}</h3>
            <div className="products-info-card-container">
                {data.products.map((elem) => (
                    <div className="products-item-card">
                        <img src={elem.img} />
                        <p>{elem.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductInfoCard;