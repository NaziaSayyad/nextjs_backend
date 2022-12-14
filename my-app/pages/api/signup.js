import { Mongoconnect } from "../../backend/connect_mongo";
import UserModel from "../../models/user.model";

const Signup =  async (req,res) =>{
    const {name,email,password} = req.body;
    await  Mongoconnect();
    const user = new UserModel({name, email,password});
     await user.save();
     console.log('Contected to Mongo');
     return res.status(201).send("Student  Created Sucessfully ")
    
}
export default Signup;