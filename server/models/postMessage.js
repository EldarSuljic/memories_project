import mongoose from 'mongoose';
//creating a mongoose schema
//we are going to specify that each post is going to have to have theese things
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

//turning Schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;