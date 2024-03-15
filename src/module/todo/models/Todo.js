const { model, Schema } = require("mongoose");

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

const Todo = model("todo", todoSchema);

module.exports = { Todo }