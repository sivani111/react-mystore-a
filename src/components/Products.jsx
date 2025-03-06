import './Products.css';
export default function Products(){
    const products=[
        {id:1,name:"p1",price:20},
        {id:2,name:"p2",price:60},
        {id:3,name:"p3",price:90},
        {id:4,name:"p4",price:40},
        {id:5,name:"p5",price:70},
        {id:6,name:"p6",price:50},

    ];
    return(
        <div>
            <h2>Product List</h2>
            <div className="App-Products-row">
                {products.map((value,index)=>(
                    <div className="App-Products-box" key={index}>
                        <h3>{value.name}</h3>
                        <h4>{value.price}</h4>
                        <div><button>Add to Cart</button></div>      
                    </div>  
                ))}
            </div>
        </div>
    )
}