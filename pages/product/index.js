import axios from "axios";
import Link from  "next/link";

export default function  Product  ({data}){
    return (
        <div>
            <h1> Product List Page  </h1>
            {
                console.log(data)
            }
           <div>
           {
           data.map((data) => (
                <div key={data.id}>
                    <p> {`Title : ${data.name}`} </p>
                    <p> {`Price ${data.price}`}</p>
                    <p> {`quantity :${data.qty}`}</p>
                   <img  src={data.image} />
             </div>
                
            ))
           }
           </div>
        </div>
    )
}
export const getServerSideProps  = async ({req, res }) =>{
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
      )
    // const {id} = context.query;
    const response  = await fetch(`http://localhost:3000/api/getproducts`);
    let data = await response.json();
    return {
        props :{data}
    }
}
    // const response = await axios.get(`http://localhost:3000/api/getproducts`,{
    //     headers:{
    //         "Content-Type" : "application/json"
    //     }
    // });
    // // .then((res) => res.json());
    // let data = await res.json();
    
    
            // alertMessage: query.alertMessage || null,
            // alertMessageType: query.alertMessageType || null,
            // one: 1,
            // product: JSON.parse(JSON.stringify(res)),
            
        
    



// https://fakestoreapi.com/products
// http://localhost:3000/api/getproducts