const CardComponent = ({restaurant}) => {
    const {img,name,cuisine,stars} = restaurant;
    return (
    <div id="card" className="card" >
        <img src={img} />
        <h1>{name}</h1>
        <h2>{cuisine}</h2>
        <h3>{stars} star</h3>
    </div>
) };

export default CardComponent;