// Reaction - schema only
const reactionId = {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId()
};

const reactionBody = {
    type: String,
    required: true,
    maxlength: 280
};

const username = {
    type: String,
    required: true
};

const createdAt = {
    type: Date,
    default: Date.now,
    get: timestamp => new Date(timestamp).toLocaleDateString()
};

// Usa in ReactionSchema
const ReactionSchema = new mongoose.Schema(
    {
        reactionId,
        reactionBody,
        username,
        createdAt,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "User",
        },
        reaction: {
            type: String,
            required: true,
        },
        replies: [ReplySchema],
    },
    {getters: true}
);

// reactionId
//
// Use Mongoose's ObjectId data type
// Default value is set to a new ObjectId
// reactionBody
//
// String
// Required
// 280 character maximum
// username
//
// String
// Required
// createdAt
//
// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query

// model frm npm
// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
//
// const BlogPost = new Schema({
//     author: ObjectId,
//     title: String,
//     body: String,
//     date: Date
// });


