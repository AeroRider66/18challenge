// email regex from chall 17
// /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

//dependencies
const { Schema, model, Types } = require('mongoose');
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        // need  expression to validate email format - regex
        // email regex from chall 17
// /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        email: {

        },
        // friend count? to do

        friends:[
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
        thoughts:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
    },
    // add JSON propery and inputs with ?? toJSON ?? Maybe in Challenge 19?
    {
        toJSON: {
            virtuals: true, // enables virtual properties to be displayed when a user document is transformed into JSON format
        },
        id: false, // disables the default '_id' field in the User model to be returned when calling toJSON() method
    }
);

// Defining a virtual property 'friendCount' which returns the number of friends in the friends array
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});
// Creating the User model from the userSchema
const User = model('User',userSchema)
// Exporting the User model as a module
module.exports = User

// =============================================
// from https://blog.devgenius.io/how-i-design-database-for-social-media-mini-project-using-mongo-db-6282cfee48a6
// const userSchema = new mongoose.Schema(
//     {
//         username: {
//             type: String,
//             required: true,
//             unique: true,
//         },
//         Thought: {
//             type: String,
//             required: true,
//             unique: true,
//         },

// );