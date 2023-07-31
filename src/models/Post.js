import mongoose from "mongoose"

const {Schema} = mongoose;

const postSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String, 
            require: true
        }, 
        img: {
            type: String, 
            required: true
        },
        content: {
            type: String, 
            required: true
        },
        username: {
            type: String, 
            required: true
        },
    },
    {timestamps: true}
);

// create a user collect in database
// export default mongoose.model("Post", postSchema);
export default mongoose.models.Post || mongoose.model("Post", postSchema);