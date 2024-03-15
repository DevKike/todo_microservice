const { create, update, deleteOne, get, getAll } = require("./../service/todo.service");

const createTodo = async (todo) => {
    try {
        return await create(todo);
    } catch (error) {
        throw error;
    }
}

const updateTodo = async (_id, todo) => {
    try {
        await update(_id, todo);
        return true;
    } catch (error) {
        throw error;
    }
}

const deleteTodo = async (_id) => {
    try {
        await deleteOne(_id);
        return true;
    } catch (error) {
        throw error;
    }
}

const getTodo = async (_id) => {
    try {
        return await get(_id);
    } catch (error) {
        throw error;
    }
}

const getToDoes = async (userId) => {
    try {
        return await getAll(userId);
    } catch (error) {
        throw error;
    }
}

module.exports = { createTodo, updateTodo, deleteTodo, getTodo, getToDoes }