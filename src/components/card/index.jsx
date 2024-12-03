function Card({title,img}) {
return(
    <div className="card">
        <img src={img} alt={title + "img"} />
        <h1>{title}</h1>
    </div>
);
}

export default Card