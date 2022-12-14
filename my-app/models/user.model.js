
import {Schema, model, models} from "mongoose";

const Userschema = new Schema({
    name : String,
    email :{ 
        type : String,
        unique : true
    },
    password : String,
    role:{
        type:String,
        enum : ["student", "instructor", "admin"], 
        // enum stands for enumator
        default:"student"
    },

});

// module.exports = mongoose.model('users', Userschema); 
export default  models.UserModel || model("user" , Userschema);

// argon2, pbkdf2, bcrypt
