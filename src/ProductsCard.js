const ProductsCard = () => {
    return ( 
        <div className="card">
            <div className='imgbx'>
                <img src="./src/nike.png" alt=""/>
            </div>
            <div className='containerbox'>
                <h2>Ayoubs Nike</h2>
                <div className='size'>
                    <h3>Size :</h3>
                    <span>8</span>
                    <span>7</span>
                    <span>5</span>
                    <span>3</span>
                </div>
                <div className='color'>
                    <h3>color :</h3>
                    <span>8</span>
                    <span>7</span>
                    <span>5</span>
                </div>
                <a href="/">Order</a>
            </div>
        </div>
     );
}
 
export default ProductsCard;