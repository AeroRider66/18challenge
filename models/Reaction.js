const ThoughtSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "User",
        },
        thought: {
            type: String,
            required: true,
            ref: "Thought",
        },
        // reactions: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Reaction",
        //     },
        // ],
    },
    { get: timestamp => new Date(timestamp).toLocaleDateString() }
);

const ReactionSchema = new mongoose.Schema(
    {
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
    { get: timestamp => new Date(timestamp).toLocaleDateString() }
);

