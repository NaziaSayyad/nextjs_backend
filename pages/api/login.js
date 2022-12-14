import jwt from "jsonwebtoken"
import { Mongoconnect } from "../../backend/connect_mongo";
import UserModel from "../../models/user.model";
const Login  = async (req,res) => {
    const {email,password} = req.body;
     await Mongoconnect()
    const user = await UserModel.findOne({email,password});
    if(user){
        // generate token
        const token = jwt.sign(
        { id : user.id, name : user.name, age : user.age, role:user.role} ,
            "SECRET1234",
            {
                expiresIn : "2 days"
            }
        );
        const refrestoken = jwt.sign( {} , "REFRESHTOKEN" , {expiresIn : "7 days"})
        return res.send({message : "Login Sucess", token , refrestoken
    })
    }
    return res.status(401).send("Invalid Credentials");
}
export default Login;