import { Mongoconnect } from "../../backend/connect_mongo"
import Productmodel from "../../models/products.model";

const Getproducts =  async (req,res) =>{
     await Mongoconnect();
     const prdct =  await Productmodel.find();
     var headers = "YES";
    //  console.log(prdct);
    //  formatOutput(prdct.map(x => x.toObject()), headers);
     res.status(201).send(prdct);
}
export default Getproducts;