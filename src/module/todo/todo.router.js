const { Router } = require("express");
const { createTodo, getTodo, getToDoes, deleteTodo, updateTodo } = require("./controller/todo.controller");
const authToken = require("../../middleware/authToken.middleware");
const { validateSchema } = require("./../../middleware/schemaValidator.middleware");
const { todoCreateSchema, todoUpdateSchema } = require("./schema/todo.schema");

const todoRouter = Router();

todoRouter.post("/", authToken(), validateSchema(todoCreateSchema), async (req, res) => {
    try {
        const body = req.body;
        const response = await createTodo(body);
        res.status(201).send({
            data: response
        })
    } catch (error) {
        res.status(400).send({
            data: "Error creating todo"
        })
    }
});

todoRouter.patch("/", authToken(), validateSchema(todoUpdateSchema), async (req, res) => {
    try {
        const body = req.body;
        const response = await updateTodo(body);
        res.status(201).send({
            data: response
        })
    } catch (error) {
        res.status(400).send({
            data: "Error creating todo"
        })
    }
});

todoRouter.get("/:id", authToken(), async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getTodo(id);
        res.status(200).send({
            data: response
        })
    } catch (error) {
        res.status(404).send({
            data: "Not to do was found"
        })
    }
});

todoRouter.get("/all/:userId", authToken(), async (req, res) => {
    try {
        const { userId } = req.params;
        const toDoes = await getToDoes(userId);
        res.status(200).send({
            data: toDoes
        });
    } catch (error) {
        res.status(404).send({
            data: "Not to does were found"
        })
    }
});

todoRouter.delete("/:id", authToken(), async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteTodo(id);
        res.status(202).send({
            data: "Deleted to do with success"
        })
    } catch (error) {
        
    }
});

module.exports = todoRouter;