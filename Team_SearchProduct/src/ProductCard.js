

const ProductCard = ({product}) => {
    const {img,name,description} = product;
    return (
        <figure class="Product_Card">
        <img src={img} class="product_image" />
        <figcaption>
            <h3>{name}</h3>
            <h5>{description}</h5>
        </figcaption>
        </figure>
) };

export default ProductCard;