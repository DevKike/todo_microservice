const validateSchema = (schema) => {
    return (req, res, next) => {
        const body = req.body;
        const { error } = schema.validate(body);
        if (error) {
            res.status(400).send({
                data: "All fields must be set"
            });
        } else {
            next();
        }
    }
}

module.exports = { validateSchema };