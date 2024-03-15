const { Todo } = require("./../model/todo.model");

const create = async (todo) => {
    try {
        const newTodo = new Todo(todo);
        return await newTodo.save()
    } catch (error) {
        console.log("🚀  ~ create ~ error:", error);
        throw error;
    }
}

const update = async (_id, todo) => {
    try {
        await Todo.findByIdAndUpdate(_id, todo);
        return true;
    } catch (error) {
        throw error;
    }
}

const deleteOne = async (_id) => {
    try {
        await Todo.findByIdAndDelete(_id);
        return true;
    } catch (error) {
        throw error;
    }
}

const get = async (_id) => {
    try {
        return await Todo.findById(_id);
    } catch (error) {
        throw error;
    }
}

const getAll = async (userId) => {
    try {
        return await Todo.find({ userId }).sort({ createAt: "asc" })
    } catch (error) {
        throw error;
    }
}

module.exports = { create, update, deleteOne, get, getAll };