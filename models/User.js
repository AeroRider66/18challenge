// email regex from chall 17
// /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
const { Schema, model, Types } = require('mongoose');
// Defining the User schema
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill a valid email address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// use schema to create model
const User = model('User', userSchema);

// Exporting the User model as a module
module.exports = User;

// From instructions.
// User:
//
// username
// String
// Unique
// Required
// Trimmed
//
// email
// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)
//
// thoughts
// Array of _id values referencing the Thought model
//
// friends
// Array of _id values referencing the User model (self-reference)

// // Creating the User model from the userSchema
// const User = model('User',userSchema)
// // Exporting the User model as a module
// module.exports = User
//
// // =============================================
// // from https://blog.devgenius.io/how-i-design-database-for-social-media-mini-project-using-mongo-db-6282cfee48a6
// // const userSchema = new mongoose.Schema(
// //     {
// //         username: {
// //             type: String,
// //             required: true,
// //             unique: true,
// //         },
// //         Thought: {
// //             type: String,
// //             required: true,
// //             unique: true,
// //         },
//
// // );