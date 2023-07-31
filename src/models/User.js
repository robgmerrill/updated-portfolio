import mongoose from "mongoose"

const {Schema} = mongoose;

const userSchema = new Schema({
        name: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String, 
            unique: true,
            require: true
        }, 
        password: {
            type: String, 
            required: true
        },
    },
    {timestamps: true}
);

// create a user collect in database
export default mongoose.model("User", userSchema);